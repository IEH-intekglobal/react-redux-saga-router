interface DashboardProps {
    counter: number;
    increment: ()=>void;
    decrement: ()=>void;
}
export function Dashboard({
    counter,
    increment,
    decrement,
}: DashboardProps){
    return <div>
        <h1>Dashboard</h1>
        <hr/>
        <p>Counter: {counter}</p>
        <button onClick={()=>decrement()}>-</button>
        <button onClick={()=>increment()}>+</button>
    </div>
}