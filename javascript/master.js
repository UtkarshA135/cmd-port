let	nameUser
let commandHeader
let commandBox
// window.onload = function() {
// 	if(!window.location.hash) {
// 		window.location = window.location + '#loaded';
// 		window.location.reload();
// 	}
// }
$.fn.typewriter = function() {
    this.each(function() {
      var c = $(this),
        b = c.html(),
        a = 0,
        d = 0;
     // c.html("");
      var e = function() {
        if ("<" == b.substring(a, a + 1)) {
          var f = new RegExp(/<span class="instant"/),
            g = new RegExp(/<span class="clear"/);
          if (b.substring(a, b.length).match(f)) a += b.substring(a, b.length).indexOf("</span>") + 7;
          else if (b.substring(a, b.length).match(g)) d = a, a += b.substring(a, b.length).indexOf("</span>") + 7;
          else
            for (;
              ">" != b.substring(a, a + 1);) a++
        }
        c.html(b.substring(d, a++) + (a & 1 ? "_" : ""));
        a >= b.length || setTimeout(e, 70 + 100 *
          Math.random())
      };
      e()
    });
    return this
  }

  $(".welcome").typewriter();
  $(".message").typewriter();

  
document.getElementById('enterButton').addEventListener('keyup', () => {
	if (event.keyCode === 13) {
		document.getElementById('enterButton').disabled = true
		// event.preventDefault();
		let parent = document.querySelectorAll('#parent')
		document.querySelector('.animation').style.display = 'block'
		let counter = 1
		for(let i = 0 ; i < parent.length ; i++ ){
			parent[i].style.animation = 'animated-text 1s steps(30,end) 1s 1 normal both'
			parent[i].style.animationDelay = counter+ 's'
			counter = counter + 2
		}
		setTimeout(()=>{
			document.querySelector('.animation').style.display = 'none';
			document.querySelector('.nameEntry').style.display = 'none';
			document.querySelector('.commandLine').style.display = 'block';
		}, 13000);
	}
	
    nameUser = document.getElementById('enterButton').value


	document.getElementById('userName').innerHTML = nameUser
	document.getElementById('commandButton').focus()
	document.getElementById('commandButton').onblur = function (event) { 
		let blurEl = this; 
			setTimeout(function() {
			    blurEl.focus()
			}, 10);
		};
	commandHeader = `<span class="commandHeader"><span id="userName">${nameUser}</span><span style="color: #ff5680; font-weight: bold;">@</span><span style="color:#d57bff ;">Utkarsh</span>:/PORTFOLIO$ `

	input = `-> </span></span><input id="commandButton" type="text" name="command" autocomplete="false" placeholder="Enter command" onkeyup="caller(event)"><div class="output"></div>`

	commandBox = commandHeader + input

})

function onblur (event) { 
	let blurEl = this; 
	setTimeout(function() {
	    blurEl.focus()
	}, 10);
};

let iC = false
let iP = false
let iPW = false

let cdCommand = (command, output) => {
	if (command.split(' ')[1] == 'BIO'){
		
		output.innerHTML = `<p class="bio">
		       <p class="bio" >
				<span style='font-weight: bold; color: #f600f6'>  Utkarsh Agarwal  | utkarsh135 <br></span>
				I am a CSE undergraduate at <span style='color: #ffa500'>Ramaiah Institute of Technology </span> and a core member at Numera-RIT . </span>
			 	<span>Eye-poppingly prolific <span style='color: #ffa500'>Full Stack web and Flutter App Developer </span>with a passion for metrics and beating former "best-yets", with over a year experience and willingness to master Problem Solving skills , to provide effective solution to real world problems and giving it back to the community.
                </br>
				I <span style='color: #ff1a1a'>love coding</span> and I am <span style='color: #ff3333'>passionate</span> to learn <span 'style: color:#00ff9c'>new</span> things. 
				I also take part in various <span style='color: #00ccff'>coding competitions</span> and <span style='color: #00ccff'>hackathons.</span>
				<br>
				 <span> I am <span> 6 ⭐ on <span style='color: #00ff9c' ><a href="https://www.hackerrank.com/utkarshagarwal11">Hackkerank</a></span> </span> and <span> 3⭐ with 1647 max rating at <span style='color: #FCDEC0' ><a href="https://www.codechef.com/users/utkarsh135">Codechef</a></span></span> 
				</br>
				 I may be able to solve <strike>all</strike> <span style='color: #ffff4d'>some</span> of your problems.
			</p> ${commandBox}`
			
		
		} else if (command.split(' ')[1] == 'CERTIFICATES'){
			commandBox = commandHeader + `<span>/Certificates/</span>` + input 
			iC = true
			output.innerHTML = `${commandBox}`
		} else if (command.split(' ')[1] == 'SKILLS') {
			output.innerHTML = `<div class="skills" >
			<table >
				<tr>
					<th>JavaScript ES6</th>
					<td>
						<div class='progress'>
							<div class="progress-bar" style="width: 80%; background-color: #f2d32C;">
							</div>
						</div>
					</td>
				</tr>
				<tr>
					<th>CSS (SASS/SCSS)</th>
					<td>
						<div class='progress'>
							<div class="progress-bar" style="width: 75%; background-color: #f2d31b;">
							</div>
						</div>
					</td>
				</tr>
				<tr>
					<th>HTML 5</th>
					<td>
						<div class='progress'>
							<div class="progress-bar" style="width: 85%; background-color: #86e01e;">
							</div>
						</div>
					</td>
				</tr>
				<tr>
					<th>MERN Stack</th>
					<td>
						<div class='progress'>
							<div class="progress-bar" style="width: 85%; background-color: #86e01e;">
							</div>
						</div>
					</td>
				</tr>
				<tr>
					<th>Android SDK</th>
					<td>
						<div class='progress'>
							<div class="progress-bar" style="width: 85%; background-color: #f2d31b;">
							</div>
						</div>
					</td>
				</tr>
				<tr>
					<th>Flutter</th>
					<td>
						<div class='progress'>
							<div class="progress-bar" style="width: 85%; background-color: #f2b01e;">
							</div>
						</div>
					</td>
				</tr>
				<tr>
				<th>C/ C++ (STLs)</th>
				<td>
					<div class='progress'>
						<div class="progress-bar" style="width: 95%; background-color: #f2b01e;">
						</div>
					</div>
				</td>
			</tr>
			<tr>
				<th>Java</th>
				<td>
					<div class='progress'>
						<div class="progress-bar" style="width: 85%; background-color: #f2b01e;">
						</div>
					</div>
				</td>
			</tr>
			<tr>
			<th>Swift</th>
			<td>
				<div class='progress'>
					<div class="progress-bar" style="width: 70%; background-color: #f2b01e;">
					</div>
				</div>
			</td>
		</tr>
		<tr>
			<th>React Native</th>
			<td>
				<div class='progress'>
					<div class="progress-bar" style="width: 70%; background-color: #f2b01e;">
					</div>
				</div>
			</td>
		</tr>
		<tr>
			<th>DSA</th>
			<td>
				<div class='progress'>
					<div class="progress-bar" style="width: 80%; background-color: #f2b01e;">
					</div>
				</div>
			</td>
		</tr>
			</table>
			</div> ${commandBox}`
		} 
		
		else if (command.split(' ')[1] == 'RESUME') {
		
			output.innerHTML = `
			<div class="projects"><h3> Download my <a href='https://drive.google.com/file/d/167OFIk0g564oHSr_Phy4qgJUQ_MqgzUp/view?usp=sharing' target='_blank'> resume </a></h3>
			</br><h3> Also I do Competitive Coding ,  my CP-Handles - </h3>

			<table >
			<tr>
			<td><th ><a href ="https://www.codechef.com/users/utkarsh135" target='_blank'>Codechef</a></th></td>
			</tr>
			<tr>
			<td><th ><a href ="https://codeforces.com/profile/utkarshagarwal101" target='_blank'>Codeforces</a></th></td>
			</tr>
			<tr>
			<td><th ><a href ="https://www.hackerrank.com/utkarshagarwal11" target='_blank'>HackerRank</a></th></td>
			</tr>
			</table>
			</div>
			${commandBox}`
		}
		else if (command.split(' ')[1] == 'PROJECTS') {
			commandBox = commandHeader + '<span>/Projects/</span>' + input
			iP = true
			output.innerHTML = `${commandBox}`
		} else if (command.split(' ')[1] == 'WORKEXPERIENCES') {
			commandBox = commandHeader + '<span>/WorkExperiences/</span>' + input
			iPW = true
			output.innerHTML = `${commandBox}`
		} else if (command.split(' ')[1] == '..') {
			commandBox = commandHeader + input 
			iC = false
			iP = false
			iPW = false
			output.innerHTML = `${commandBox}`
		} else if (command.split(' ')[1] == 'SOCIALLINKS') {
			output.innerHTML = `<div class='contact'>Like my Work ? Get in touch ?<br>
			<a href='https://github.com/UtkarshA135' style='margin: 50px' target='_blank'><img src="./svg icons/github.svg"></a>
			<a href='https://www.linkedin.com/in/utkarsh-agarwal-654470191/' style='margin: 50px' target='_blank'><img src="./svg icons/linkedin.svg"></a>
			
			</div>
			${commandBox}`
		} else if (command.split(' ')[1] == 'SENDAMESSAGE') {
			output.innerHTML = `
			<form action="https://formspree.io/f/xbjqkapp" method="POST" class='form'>
				<table>
					<tr>
						<label>
							<td> Your name: </td>
							<td> <input type="text" name="name" placeholder='Enter your name'> </td>
						</label>
					</tr>
					<tr>
						<label>
							<td> Your email: </td>
							<td> <input type="text" name="_replyto" placeholder='Enter your email'> </td>
						</label>
					</tr>
					<tr>
						<label>
							<td> Your message: </td>
							<td> <textarea name="message" placeholder='Enter your message'></textarea> </td>
						</label>
					</tr>
				</table>
				<button type="submit"><span>Send</span></button>
			</form>
			${commandBox}`
		} else {
			output.innerHTML = `<p class="error">-portfolio: Directory: not found </p> ${commandBox}`	
		}
}
let caller = (event) => {
	if(event.keyCode === 13) {
		
		let cb = document.querySelectorAll('#commandButton')
		cb[cb.length-1].disabled = true

		let command = document.querySelectorAll('#commandButton')
		command = command[command.length-1].value

		let output = document.querySelectorAll('.output')[document.querySelectorAll('.output').length -1]
		
		command = command.replace(/\s+/g, " ").trim().toUpperCase();
		if (command.split(' ')[0] == 'CD') {
			if (command.split(' ')[1] == '..'){
				cdCommand(command, output)
				// output.innerHTML = `<p class="error">-portfolio: COMMAND: not found </p> ${commandBox}`
			} else if (iC || iP || iPW ){
				output.innerHTML = `<p class="error">-portfolio: COMMAND: not found </p> ${commandBox}`
			} else {
				cdCommand(command, output)

				// output.innerHTML = `<p class="error">-portfolio: COMMAND: not found </p> ${commandBox}`
				// cdCommand(command, output)
			}
		} else if (command == 'LS' || command == 'DIR') {
			if (iC) {
				output.innerHTML = `
					<div class='certificates'>
						<div class='certificate'>
							<h3 style="color: #fffc58;">Problem Solving by HackerRank</h3>
							<p>Issued April 2021</p>
							<a href="https://www.hackerrank.com/certificates/26a534b8b228" target='_blank'>Verify Credential</a>
						</div>
						<div class='certificate'>	
							<h3 style="color: #fffc58;">CSS Certified by HackerRank</h3>
							<p>Issued June 2021</p>
							<a href="https://www.hackerrank.com/certificates/98a5fb5f22a1" target='_blank'>Verify Credential</a>
						</div>
						<div class='certificate'>
							<h3 style="color: #fffc58;">INSPIRE Scholarship by MHRD for AIR-5 in ISC'19 </h3>
							<p>Issued March 2021</p>
						</div>
						<div class='certificate'>
							<h3 style="color: #fffc58;">1st Place at WIE Ideathon by IEE-RIT</h3>
							<p>Issued March 2021</p>
							<a href="https://drive.google.com/file/d/1PavL5PhhK7riGEe3EsraLN_FjUCiUgze/view?usp=sharing" target='_blank'>Verify Credential</a>
						</div>
						<div class='certificate'>
							<h3 style="color: #fffc58;">3rd Place at IOSD NSUT Hackathon</h3>
							<p>Issued March 2021</p>
							<a href="https://drive.google.com/file/d/1zWmdHbX9iBkljBtTJ8qPYmtzUdJXQCwZ/view?usp=sharing" target='_blank'>Verify Credential</a>
						</div>
						<div class='certificate'>
							<h3 style="color: #fffc58;">3rd Place at Hack4cause 2.0</h3>
							<p>Issued March 2021</p>
							<a href="https://drive.google.com/file/d/1zWmdHbX9iBkljBtTJ8qPYmtzUdJXQCwZ/view?usp=sharing" target='_blank'>Verify Credential</a>
						</div>
						<div class='certificate'>
							<h3 style="color: #fffc58;">3rd Place at Hack4cause 2.0</h3>
							<p>Issued March 2021</p>
							<a href="https://drive.google.com/file/d/1zWmdHbX9iBkljBtTJ8qPYmtzUdJXQCwZ/view?usp=sharing" target='_blank'>Verify Credential</a>
						</div>
						<div class='certificate'>
							<h3 style="color: #fffc58;">Special Mention in Aatmnirbhar Bharat Hackathon</h3>
							<p>Issued August 2020</p>
							<a href="https://drive.google.com/file/d/18DR2kt22Rn7tBl1Ot08whnmBNSWohe3X/view
							
							" target='_blank'>Verify Credential</a>
						</div>
						<div class='certificate'>
							<h3 style="color: #fffc58;">Runners Up at Re-Imagine Waste Hackathon</h3>
							<p>Issued April 2021</p>
						</div>
						<div class='certificate'>
							<h3 style="color: #fffc58;">Third Place at wackHeist by Code-RIT </h3>
							<p>Issued March 2021</p>
						</div>
						
					</div>

				${commandBox}`
			} else if (iP) { 
				output.innerHTML = `
				<div class='projects'>
					<ul class='project'>
						<li>
							<h3>KisanSeva</h3>
							<a href="https://github.com/UtkarshA135/KisanSeva" target='_blank'>GitHub Repo</a>
							
						</li>
						<li class='project'>
							<h3>HealthyU</h3>
							<a href="https://github.com/anirudh-t4/healthyU" target='_blank'>GitHub Repo</a>
							
						</li>
						<li class='project'>
							<h3>Waste 360</h3>
							<a href="https://github.com/anirudh-t4/waste_mx" target='_blank'>GitHub Repo</a>
							<p>For better understanding - <a href='https://www.canva.com/design/DAEYtl0vt2g/nMQ0hPlAUxd8hnVMCT5mqQ/view?utm_content=DAEYtl0vt2g&utm_campaign=designshare&utm_medium=link&utm_source=sharebutton' target='_blank'>Canva Presentation</a></p>
						</li>
						<li class='project'>
							<h3>MeetOut</h3>
							<a href="https://github.com/UtkarshA135/MeetOut" target='_blank'>GitHub Repo</a>
							<p> Deployed at <a href='https://meetout.netlify.app/' target='_blank'>Netlify</a></p>
						</li>
						<li class='project'>
							<h3>AI Powered E-commerce web app</h3>
							<a href="https://github.com/UtkarshA135/AI-powered-Ecommerce" target='_blank'>GitHub Repo</a>
							
						</li>
						<li class='project'>
							<h3>Cert-Maker</h3>
							<a href="https://github.com/UtkarshA135/vithack" target='_blank'>GitHub Repo</a>
						</li>
						<li class='project'>
							<h3>Secrets-Website</h3>
							<a href="https://github.com/UtkarshA135/SecretsWebsite" target='_blank'>GitHub Repo</a>
		
						</li>
					</ul>
				</div>
				${commandBox}
				`
			} else if (iPW) {
				output.innerHTML = `
				<div class='projects'>
					<ul class='project'>
						<li>
							<h3>Software Development Intern at Samarik Digital</h3>
							<a href="https://drive.google.com/file/d/1Zy5tSGfr2yg5GgCgYAdaW7asqLOzRYEO/view?usp=drivesdk" target='_blank'>Offer Letter</a>
							<p>June'21-Present</p>
							<p>Its been a month working with Samarik Digital . I have been put into two different projects . One where I work on a Flutter based application and other one is a React Native application. I handle user-experience by making responsive front-ends . </p>
						</li>
						<li>
						<h3>Full Stack Developer Intern at Investiture</h3>
						<a href="https://drive.google.com/file/d/1aB4GcbOHLtae0K1Z5aO3VjJdwqIwR8hq/view?usp=sharing" target='_blank'>Certificate of Completion</a>
						<p>Jan'21-Feb'21</p>
						<p>Investiture is a Jaipur based startup by Sanchit Taksali sir . It was a month paid internship where I worked on Mera Advisor App - not available on Playstore , still under building. I worked on blogs backend as well as frontend , posting and retrieving data of blogs from Firebase, EMI and 7 different kinds of calculators, Chat feature</p>
					</li>
					<li>
					<h3>Flutter Intern at Data-Stats</h3>
					<a href="https://drive.google.com/file/d/1m1d2b3oZFAOrrjr93yXtPYYDBn5JKdxV/view?usp=sharing" target='_blank'>Certificate of Completion</a>
					<p>Sep'20-Nov'20</p>
					<p>Data-Stats is a Noida based company . It was a two month paid internship where I worked on<a href="https://play.google.com/store/apps/details?id=com.datastats.scanease" > Scanease</a>- available on Playstore. I worked on Image compression & enhancement , Business cards , improving Pdf quality ,Multilingual feature in app, Google drive and Dropbox integration.</p>
				</li>
						
					</ul>
				</div>
				${commandBox}
				`
			} else {
				output.innerHTML = `<p class="ls">
				<div style="color: #fffc58; padding-left: 45px; line-height: normal;">
					<p>bio</p>
					<p>/certificates</p>
					<p>skills</p>
					<p>/projects</p>
					<p>/workExpriences</p>
					<p>resume</p>
					<p>/socialLinks</p>
					<p>sendAMessage</p>

				</div>

				</p> ${commandBox}`
			}
		} else if (command == 'HELP' || command == 'INFO') {
			output.innerHTML = `<p class="ls">
			<span style="font-weight: bold;">PORTFOLIO POWERSHELL HELP SYSTEM</span><br> 
				<span style='padding-left: 35px'>Displays help about Portfolio Powershell cmdlets</span>
			<br>
			<br>
			These commands are defined internally.
			<div style="color: #fffc58; padding-left: 45px; line-height: normal;">
				<p>HELP/INFO - To open powershell help system</p>
				<p>DIR - To view all folders and files in the directory</p> 
				<p>LS - To view all folders and files in the directory</p>
				<p>CD - To change the current directory</p>
				<p>REFRESH - To refresh the page</p>
				<p>CLEARSCREEN / CLS - To clear the page</p>
				<p>EXIT - To exit the page</p>
			</div>
			</p> ${commandBox}`
		} else if (command == 'REFRESH'){
			location.reload()
		} else if (command == 'CLS' || command == 'CLEARSCREEN') {
			document.querySelector('.commandLine').innerHTML = `${commandBox}`
		} else if (command == 'EXIT') {
			document.querySelector('.container').innerHTML = `<div class='exit'><h1>Thank You</h1><p>⭐ Made with ❤️ by Utkarsh Agarwal ⭐</p></div>`
		} else {
			output.innerHTML = `<p class="error">-portfolio: COMMAND: not found </p> ${commandBox}`
		}
		let btn = document.querySelectorAll('#commandButton')
		btn = btn[btn.length-1]
		btn.focus()
	}
	window.scrollTo(0,document.body.scrollHeight);

}
