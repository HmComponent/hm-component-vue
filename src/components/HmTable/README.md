# Hm Table
You can put the components you want in the table column. <br>
원한다면, 테이블 컬럼에 당신이 원하는 컴포넌트를 넣을 수 있습니다.

### Table of Contents
- [Table API](#table-api)
    - [Table Props](#table-props)
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

## Type
### ColumnInfoType
| Name        | Description                                      | Require | Type                                | Default    |
|-------------|--------------------------------------------------|---------|-------------------------------------|------------|
| id          | id <br>아이디                                       | ture    | `string`                            | -          |
| label       | Column header display name <br>열 머리글 표시명         | ture    | `string`                            | -          |
| prop        | Properties of the data to import <br>가져올 데이터의 속성 | false   | `string`                            | -          |
| width       | Horizontal Size Of Column <br>열 가로 크기            | false   | `number` \| `string`                | `'auto'`   |
| headerAlign | Column Header Sorting Method <br>열 머리글 정렬방식      | false   | `'left'` \| `'center'` \| `'right'` | `'center'` |
| dataAlign   | Column Data Sorting Method <br>열 데이터 정렬방식        | false   | `'left'` \| `'center'` \| `'right'` | `'center'` |

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