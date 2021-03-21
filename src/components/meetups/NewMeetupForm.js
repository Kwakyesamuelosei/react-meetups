import { useRef } from 'react'
import Card from '../ui/Card';
import classes from './NewMeetupForm.module.css'

const NewMeetupForm = (props) => {
    const titleRef = useRef();
    const addressRef = useRef();
    const descRef = useRef();


    const submitHandler = (e) => {
        e.preventDefault()
        const entitle = titleRef.current.value;
        const address = addressRef.current.value;
        const desc = descRef.current.value;

        const request_data = {
            title: entitle,
            address: address,
            description: desc
        }

        props.onAddMeetup(request_data)    
    }
    return (
        <Card>
            <form className={classes.form} onSubmit={submitHandler}>
                <div className={classes.control}>
                    <label htmlFor="title">Meetup Title</label>
                    <input type="text" required id="title" ref={titleRef}/>
                </div>
                <div className={classes.control}>
                    <label htmlFor="address">Address</label>
                    <input type="text" required id="address" ref={addressRef} />
                </div>
                <div className={classes.control}>
                    <label htmlFor="description">Description</label>
                    <textarea id="description" ref={descRef} required rows="5"></textarea>
                </div>
                <div className={classes.actions}>
                    <button>Add Meetup</button>
                </div>
            </form>
        </Card>
    )
}

export default NewMeetupForm;