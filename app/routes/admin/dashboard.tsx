import {Header} from "../../../components";


const Dashboard = () => {
    const user = {name:'Bindu'};
    return (
        <main className="dashboard wrapper">
            <Header
              title={`Welcome ${user?.name ?? 'Guest'}👋`}
              description = "Track activity, trends and popular destination in real time"
            />

            Dashboard Page Contents
        </main>
    )
}
export default Dashboard
