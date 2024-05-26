export type expenseType = {
    date:string
    category:string,
    note:string,
    amount:string
}

export type propsType = {
    expense: expenseType,
    entryForm: boolean,
    expenseHandler: (event:any)=>void,
    onClickHandler: (state:boolean)=>void,
    onClickButtonHandler: ()=>void
}