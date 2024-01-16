import useSWR from "swr"; // use to fetch data

import fetcher from "@/lib/fetcher";

const useCurrentUser = () => {
  const { data, error, isLoading, mutate } = useSWR("/api/current", fetcher);

  return {
    data,
    error,
    isLoading,
    mutate,
  };
};

export default useCurrentUser;

//1.12

// 在这一步中，你正在创建一个自定义的React钩子`useCurrentUser`，它使用`swr`库来获取当前用户的数据。以下是详细的步骤解释：

// 1. **安装SWR库**:
//    - 运行命令`npm install swr`来安装SWR库。SWR是一个React钩子库，用于数据获取。它提供了一种有效的方法来获取、缓存和更新数据。

// 2. **导入useSWR钩子**:
//    - `import useSWR from "swr";`这行代码导入了`useSWR`钩子，使你能够在组件中使用它来处理数据获取。

// 3. **导入fetcher函数**:
//    - `import fetcher from '@/lib/fetcher';`这行代码导入了之前创建的`fetcher`函数，它将用于`useSWR`钩子来发起网络请求。

// 4. **定义useCurrentUser钩子**:
//    - `const useCurrentUser = () => { ... };`定义了一个新的钩子`useCurrentUser`。这个钩子的目的是提供一个简单的接口来获取和操作当前用户的数据。

// 5. **使用useSWR进行数据获取**:
//    - `const {data, error, isLoading, mutate } = useSWR('/api/current', fetcher);`这行代码使用`useSWR`钩子与`fetcher`函数一起发起对`/api/current`端点的GET请求。
//    - `useSWR`返回一个对象，包含了获取数据的`data`、任何可能发生的`error`、请求的`isLoading`状态，以及一个`mutate`函数，可以用来重新验证和更新数据。

// 6. **返回钩子数据**:
//    - `return { data, error, isLoading, mutate }`返回了`useSWR`提供的数据和函数。这样，任何使用`useCurrentUser`钩子的组件都可以访问到当前用户的数据，处理加载状态和错误，以及在必要时更新数据。

// 7. **导出useCurrentUser钩子**:
//    - `export default useCurrentUser;`将这个钩子导出，使它可以在其他组件中被导入和使用。

// 通过这个自定义钩子，你可以在你的React组件中非常方便地获取和更新当前用户的数据，而不必在每个组件中重写数据获取的逻辑。这种模式可以让你的代码更加干净、模块化，并且易于维护。
