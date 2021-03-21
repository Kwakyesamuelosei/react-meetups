import  { useHistory } from 'react-router-dom'

import NewMeetupForm from '../components/meetups/NewMeetupForm';


const NewMeetupPage = () =>{
    const history = useHistory()

    const handlerAddNewMeetup = (meetup) => {
        fetch('https://react-app-d9d15-default-rtdb.firebaseio.com/meetups.json',{
            method: 'POST',
            body: JSON.stringify(meetup),
            headers:{
                'Content-Type':'application/json'
            }
        }).then(() => {
            history.replace("/")
        })
    }
    return (
        <section>
            <h1>Add New Meetup</h1>
            <NewMeetupForm onAddMeetup={handlerAddNewMeetup} />
        </section>
    )
}

export default NewMeetupPage;