"use client"
import EntryForm from '../entryform'
import { useState } from 'react'
import { expenseType } from '@/app/componentTypes/componentTypes'

const Expenses = (props: any) => {
    
    const [entryForm, setEntryForm] = useState<boolean>(false)
    const [expense, setExpense] = useState<expenseType>({
        date: "",
        category: "",
        note: "",
        amount: ""
    })
    const [expenseArr, setExpenseArr] = useState<expenseType[]>([{
        date: "",
        category: "",
        note: "",
        amount: ""
    }])

    const onClickHandler = (state: boolean) => {
        setEntryForm(state);
    }

    const onClickButtonHandler = () => {
        if (!(expense.category && expense.amount && expense.date)) {
          alert("Please Fill all Fields!")  
        }
        else{
            if (!isNaN(parseInt(expense.amount))) {
                setExpenseArr([...expenseArr, expense])
                setExpense({
                    date: "",
                    category: "",
                    note: "",
                    amount: ""
                })
                setEntryForm(false)
            }
            else{
                alert("Amount Should be a Number!")
            }
        }
    }

    const expenseHandler = (event: any) => {
        setExpense({
            ...expense,
            [event.target.name]: event.target.value,
        })

    }
    return (
        <main className='h-[100vh]'>
            <EntryForm expense={expense} entryForm={entryForm} expenseHandler={expenseHandler} onClickHandler={onClickHandler} onClickButtonHandler={onClickButtonHandler} />
            <header className="w-full h-[8%] bg-blue-700 flex justify-center items-center">
                <h1 className="text-white text-4xl font-extrabold mobile:text-3xl">Expense Tracker App</h1>
            </header>
            <section className="bg-blue-300 h-[92%] flex flex-col gap-y-8 items-center">
                <h2 className="text-3xl font-bold mt-5">Expense list</h2>
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                        <tr>
                            <th scope="col" className="px-6 py-3 mobile:px-4 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">
                                ID
                            </th>
                            <th scope="col" className="px-6 py-3 mobile:px-4 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">
                                Date
                            </th>
                            <th scope="col" className="px-6 py-3 mobile:px-4 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">
                                Category
                            </th>
                            <th scope="col" className="mobile:hidden px-6 mobile:px-4 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">
                                Note
                            </th>
                            <th scope="col" className="px-6 py-3 mobile:px-4 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">
                                Amount
                            </th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {
                            (expenseArr.map((item, i) => {
                                if (i !== 0) {
                                    return (
                                        <tr>
                                            <td className="px-6 mobile:px-2 py-4 whitespace-nowrap text-sm text-gray-500">{i}</td>
                                            <td className="px-6 mobile:px-2 py-4 whitespace-nowrap text-sm text-gray-500">{item.date}</td>
                                            <td className="px-6 mobile:px-2 py-4 whitespace-nowrap text-sm text-gray-500">{item.category}</td>
                                            <td className="mobile:hidden px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.note}</td>
                                            <td className="px-6 mobile:px-2 py-4 whitespace-nowrap text-sm text-gray-500">${item.amount}</td>
                                        </tr>
                                    )
                                }
                            }))
                        }
                    </tbody>
                </table>
                <div className='w-full flex justify-end px-5'>
                    <button onClick={() => onClickHandler(true)} className='w-32 bg-black h-10 font-semibold text-base rounded-lg text-white px-2'>Add Expense</button>
                </div>
            </section>
        </main>
    )
}

export default Expenses