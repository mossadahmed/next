"use client";
import React from 'react'
import { Provider } from 'react-redux'
import store from './product/redux/store'

export default function ReduxProvider({ children }: { children: React.ReactNode }) {
    return (
        <div>
            <Provider store={store}>
                {children}
            </Provider>
        </div>
    )
}
