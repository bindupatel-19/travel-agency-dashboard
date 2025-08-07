import {Header} from "../../../components";

const CreateTrip = () => {
    const handleSubmit = async()=> {};
    return (
        <main className="flex flex-col gap-10 pb-20 wrapper">
            <Header title="Add a New Trip" description="View and edit AI Generated travel plans" />

            <section className="mt-2.5 wrapper-md">
                <form className="trip-form" onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="country">
                            Country
                        </label>
                    </div>
                </form>
            </section>
        </main>
    )
}
export default CreateTrip
