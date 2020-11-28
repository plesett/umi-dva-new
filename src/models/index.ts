import { Effect, ImmerReducer, Reducer, Subscription } from 'umi';

export interface IndexModelState {
    count: number;
    isLogin: boolean;
}
export interface IndexModelType {
    namespace: 'global';
    state: IndexModelState;
    effects: {
        add: Effect;
        jian: Effect;
    };
    reducers: {
        // save: Reducer<IndexModelState>;
        // 启用 immer 之后
        saveAdd: ImmerReducer<IndexModelState>;
        savejian: ImmerReducer<IndexModelState>;
    };
    subscriptions: { setup: Subscription };
}

const IndexModel: IndexModelType = {
    namespace: 'global',
    state: {
        count: 10, // 测试count
        isLogin: true
    },
    effects: {
        *add(_, { call, put }) {
            yield put({ type: "saveAdd" });
        },
        *jian(_, { call, put }) {
            yield put({ type: "savejian" });
        }
    },
    reducers: {
        saveAdd(state, { payload }) {
            state.count += 1
        },
        savejian(state, { payload }) {
            state.count -= 1
        },
    },
    subscriptions: {
        // 监听路由变化，如果是 '/' 则执行了dispatch({type: 'query'}) 方法
        setup({ dispatch, history }) {
            return history.listen(({ pathname }) => {
                if (pathname === '/') {
                    console.log("监听到页面为 '/' 准备派发dispatch")
                    dispatch({
                        type: 'query',
                    })
                }
            });
        }
    }
};
export default IndexModel;