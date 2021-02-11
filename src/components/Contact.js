const isOnline=true;
const Contact = ()=>{
    return (
        <div className="Contact">
            <img src="https://randomuser.me/api/portraits/lego/3.jpg" alt="avatar"/>
            <div className="name">
                <p>Wilders Lego</p>
                <h5 className="status">
                    {
                        isOnline?<p className="status-online">.  <o className="online">online</o></p> : <p className="status-offline">. <off className="offline">offline</off></p>
                    }
                </h5>
                </div>
            </div>
    )
}
export default Contact;