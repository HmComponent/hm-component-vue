# Hm Pagination
You can use pagination component. <br>
페이징 컴포넌트를 사용할 수 있습니다.

### Table of Contents
- [Pagination API](#pagination-api)
    - [Pagination Props](#pagination-props)
- [How to use](#how-to-use)

## pagination API
### pagination Props
| Name             | Description                                                   | Require | Type        | Default |
|------------------|---------------------------------------------------------------|---------|-------------|---------|
| totalCount       | Total number of data <br>데이터 총 개수                             | ture    | `number`    | -       |
| dataCountList    | List of data counts to show at a time <br>한 번에 보여줄 데이터 개수 리스트 | ture    | `number[] ` | -       |
| pagerCount | Number of pagers <br> 페이저의 수                                  | false   | `number`    | 5       |

## How to use
```vue
<script setup lang="ts">
  const changeStatus = (currPage: number, currStepCount: number) => {
    console.log(currPage, currStepCount);
  };
</script>

<template>
  <NtsPagination
    :total-count="50"
    :data-count-list="[10, 20, 30, 40, 50]"
    :pager-count="7"
    @change-status="changeStatus"
  />
</template>
```