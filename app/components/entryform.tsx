"use client"
import { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { propsType } from "../componentTypes/componentTypes";
import Expenses from "./expenses/expenses";
const EntryForm = (props:propsType) => {


    return (
        <main style={{ display: props.entryForm ? "flex" : "none" }} className="flex justify-center items-center w-full h-[100%] bg-black/40 absolute top-0">
            <div className="flex flex-col bg-blue-200 p-10 gap-y-5 w-[400px] rounded-xl justify-center relative">
                <RxCross2 onClick={() => props.onClickHandler(false)} className="text-3xl font-extrabold absolute top-5 right-4 cursor-pointer" />
                <div className="flex justify-center w-full relative top-3 mt-5">
                    <h2 className="text-3xl font-bold">Expense Details</h2>
                </div>
                <div className="flex flex-col gap-y-1 mt-8">
                    <label className="text-xl font-semi-bold">Category</label>
                    <input value={props.expense.category} className="rounded-md h-10 border border-black px-3 outline-none" onChange={props.expenseHandler} name="category" type="text" />
                </div>
                <div className="flex flex-col gap-y-1">
                    <label className="text-xl font-semi-bold">Amount</label>
                    <input value={props.expense.amount} className="rounded-md h-10 border border-black px-3 outline-none" onChange={props.expenseHandler} name="amount" type="text" />
                </div>
                <div className="flex flex-col gap-y-1 mobile:hidden">
                    <label className="text-xl font-semi-bold">Note</label>
                    <input value={props.expense.note} className="rounded-md h-10 border border-black px-3 outline-none" onChange={props.expenseHandler} name="note" type="text" />
                </div>
                <div className="flex flex-col gap-y-1">
                    <label className="text-xl font-semi-bold">Date</label>
                    <input value={props.expense.date} className="rounded-md h-10 border border-black px-3 outline-none" onChange={props.expenseHandler} name="date" type="date" />
                </div>
                <div className="flex justify-center w-full mt-5">
                    <button onClick={props.onClickButtonHandler} className="w-40 bg-black h-12 font-bold text-lg rounded-lg text-white px-5">Add Expense</button>
                </div>
            </div>
        </main>
    )
}

export default EntryForm