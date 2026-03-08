import { FaGithub, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa"

function Socials(){
return(

<div className="socials">

<a 
href="https://github.com/webghost01-NG"
target="_blank"
rel="noopener noreferrer"
>
<FaGithub className="icon"/>
</a>

<a
href="https://twitter.com/web_ghost01"
target="_blank"
rel="noopener noreferrer"
>
<FaTwitter className="icon"/>
</a>

<a
href="https://linkedin.com/in/abdurrahman-adesanya-53aaa823a?"
target="_blank"
rel="noopener noreferrer"
>
<FaLinkedin className="icon"/>
</a>

<a
href="https://instagram.com/olaoluwaadesanya"
target="_blank"
rel="noopener noreferrer"
>
<FaInstagram className="icon"/>
</a>

</div>

)
}

export default Socials