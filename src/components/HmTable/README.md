# Hm Table
You can put the components you want in the table column. <br>
원한다면, 테이블 컬럼에 당신이 원하는 컴포넌트를 넣을 수 있습니다.

<hr/>

### Table of Contents
- [Table API](#table-api)
    - [Table Props](#table-props)
    - [Table Events](#table-events)
    - [Table Slots](#table-slots)
    - [Table Exposes](#table-exposes)
- [Table Column API](#table-column-api)
  - [Table Props](#table-column-props)
    - [Table Slots](#table-column-slots)
- [Types](#types)
  - [ColumnInfoType](#columninfotype)
- [How to use](#how-to-use)

## Table API
### Table Props
| Name           | Description                                                     | Require | Type                                  | Default |
|----------------|-----------------------------------------------------------------|---------|---------------------------------------|---------|
| data           | Data to be displayed in the table <br>테이블에 표시할 데이터              | ture    | `Object[] `                           | -       |
| columnInfoList | Column Information Settings List <br>열 정보 설정 리스트                | ture    | [`ColumnInfoType[]`](#columninfotype) | -       |
| width          | Horizontal Size Of Table <br>테이블 가로 크기                          | false   | `number` \| `string`                  | -       |
| height         | Vertical Size Of Table <br>테이블 세로 크기                            | false   | `number` \| `string`                  | -       |
| rowHeight      | Horizontal Size Of Row <br>행 세로 크기                              | false   | `number` \| `string`                  | -       |
| useSelect      | Whether the row selection feature is enabled <br>행 선택 기능 활성화 여부 | false   | `boolean`                             | false   |

### Table Events
| Name              | Description                                                 | Type                                 |
|-------------------|-------------------------------------------------------------|--------------------------------------|
| clickRow          | triggers when clicking a row <br>행 클릭할 때 발생하는 트리거           | `(row: any): void`                   |
| dblClickRow       | triggers when double clicking a row <br>행 더블 클릭할 때 발생하는 트리거 | `(row: any): void`                   |
| changeSelectedRow | triggers when selection changes <br>선택된 행이 바뀔때 발생하는 트리거     | `(prevRow: any, nextRow: any): void` |

### Table Slots
| Name    | Description                                 | Type | Sub Tags        |
|---------|---------------------------------------------|------|-----------------|
| default | customize default content <br>사용자 정의 기본 콘텐츠 | -    | `HmTableColumn` |
| header  | customize header content <br>사용자 정의 머리말 콘텐츠 | -    | -               |
| footer  | customize footer content <br>사용자 정의 바닥글 콘텐츠 | -    | -               |

### Table Exposes
| Name           | Description                                                                                                                      | Sub Tags                 |
|----------------|----------------------------------------------------------------------------------------------------------------------------------|--------------------------|
| getSelectedRow | returns the currently selected rows <br>현재 선택된 행을 반환.                                                                            | `(): any`                |
| setSelectedRow | set a certain row selected.<br>선택된 행을 설정. <br> If called without any parameter, it will clear selection <br>파라미터 없이 호출하면 선택을 없앰. | `(rowIdx: number): void` |

## Table Column API
### Table Column Props
| Name | Description                  | Require | Type     | Default |
|------|------------------------------|---------|----------|---------|
| prop | field name. <br>가져올 데이터의 필드명 | false   | `string` | -       |

### Table Column Slots
| Name    | Description                                                   | Type           | Sub Tags |
|---------|---------------------------------------------------------------|----------------|----------|
| default | Custom content for table columns <br>테이블 컬럼에서 사용되는 사용자 정의 콘텐츠 | `{ row: any }` | -        |

## Types
### ColumnInfoType
| Name        | Description                                 | Require | Type                                | Default    |
|-------------|---------------------------------------------|---------|-------------------------------------|------------|
| id          | id <br>아이디                                  | ture    | `string`                            | -          |
| label       | Column header display name <br>열 머리글 표시명    | ture    | `string`                            | -          |
| prop        | field name. <br>가져올 데이터의 필드명                | false   | `string`                            | -          |
| width       | Horizontal Size Of Column <br>열 가로 크기       | false   | `number` \| `string`                | `'auto'`   |
| headerAlign | Column Header Sorting Method <br>열 머리글 정렬방식 | false   | `'left'` \| `'center'` \| `'right'` | `'center'` |
| dataAlign   | Column Data Sorting Method <br>열 데이터 정렬방식   | false   | `'left'` \| `'center'` \| `'right'` | `'center'` |

## How to use
```vue
<script setup lang="ts">
  import { ref } from 'vue';
  import { HmTable, HmTableColumn, type ColumnInfoType } from 'hm-component-vue3';
  
  type DataType = { value1: string; value2: string; value3: string; em?: boolean };
  const data = ref<DataType[]>([
    { value1: 'v1_1', value2: 'v2_1', value3: 'v3_1' },
    { value1: 'v1_2', value2: 'v2_2', value3: 'v3_2' },
    { value1: 'v1_3', value2: 'v2_3', value3: 'v3_3', em: true },
  ]);
  
  const columnInfoList = ref<ColumnInfoType[]>([
    { id: '1', prop: 'value1', label: 'data 1', width: 200, dataAlign: 'left' },
    { id: '2', label: 'data 2', headerAlign: 'right', dataAlign: 'right' },
    { id: '3', prop: 'value3', label: 'data 3', width: 120 },
    { id: '4', prop: 'value2', label: 'data 4', width: 120 },
  ]);

  const clickRow = (row: DataType) => {
    console.log('clicked row: ', row);
  }
  const dblClickRow = (row: DataType) => {
    console.log('double clicked row: ', row);
  }
  const changeSelectedRow = (prev: DataType, next: DataType) => {
    console.log('prev row: ', prev);
    console.log('next row: ', next);
  }
</script>

<template>
  <div style="height: calc(100% - 24px)">
    <hm-table
            ref="table"
            :data="data"
            :columnInfoList="columnInfoList"
            width="900"
            height="100%"
            row-height="54px"
            use-select
            @click-row="clickRow"
            @dbl-click-row="dblClickRow"
            @change-selected-row="changeSelectedRow"
    >
      <hm-table-column v-for="{ id, prop } in columnInfoList" :key="id" :prop="prop">
        <template v-if="id === '2'" #default="{ row }">
          <button>{{ row.value2 }}</button>
          <span v-if="row.em" style="color: red">emergency</span>
        </template>
      </hm-table-column>
    </hm-table>
  </div>
</template>
```