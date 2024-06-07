
//
$(document).ready(function() {
			$('#fullpage').fullpage({
				'verticalCentered': false,
				'scrollingSpeed': 600,
				'autoScrolling': false,
				'css3': true,
				'navigation': true,
				'navigationPosition': 'right',
			});
			$('#send').on('click', function() {
				let nameInput=$('#name').val();
				let mail=$('#email').val();
				let subject=$('#subject').val();
				let message=$('#message').val();
				console.log(message,nameInput,mail,subject);
				let mailVerify = /^\S+@\S+\.\S+$/.test(mail);
				if(!mailVerify || mail==''){
					alert('Mail not Valid')
				}
				else if(nameInput==''){
					alert('Name Input not Valid')
				}else if(subject==''){
					alert('Subject Input not Valid')
				}else if(message==''){
					alert('Message Input not Valid')
				}
				Email.send({
					Host : "smtp.elasticemail.com",
					Username : "adam.dev.ai7@gmail.com",
					Password : "C78CAA2526F818EB407F780F40572F41DF60",
					To : 'adam.dev.ai7@gmail.com',
					From : "adam.dev.ai7@gmail.com",
					Subject : sub||'test txt',
					Body :mes||'working'
				}).then(
				  message => alert(message)
				);
			});
		}); 

// wow
$(function()
{
    new WOW().init();
    $(".rotate").textrotator();
});

// $('send').