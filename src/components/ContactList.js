import Contact from './Contact'
const ContactList=({ users })=>{
    return(
        
            <div>
                {users.map((user)=> <Contact {...user} key={user.name}/>)}
            </div>

        
    )
}
export default ContactList;