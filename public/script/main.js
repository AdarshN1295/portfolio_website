document.querySelector('.input-submit-btn').addEventListener('click', (pd)=>{
    pd.preventDefault();
    let name = document.getElementById('contact-name').value;
    let p_num = document.getElementById('contact-phone').value;
    let email = document.getElementById('contact-email').value;
    let comments = document.getElementById('contact-comments').value;

    const formData = {
        name: name,
        phone: p_num,
        email: email,
        message: comments, // Change 'comment' to 'message'
      };

        fetch('/send-email', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),  // Send form data as JSON
          })
          .then(response => response.json())
          .then(data => {
            alert(data.message);  // Display success message or handle response
          })
          .catch(error => {
            console.error('Error:', error);
            alert('There was an error sending your message.');
          });
});


function mobileMenu(){
    document.querySelector('.mobile-navigation').style.display = 'block';
    document.querySelector('#canc_pop').addEventListener('click', ()=>{
        document.querySelector('.mobile-navigation').style.display = 'none';
    })
}

document.addEventListener('DOMContentLoaded',()=>{
    let str = document.createElement('link');
    str.setAttribute('href', 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css');
    str.setAttribute('rel', 'stylesheet')
    document.head.appendChild(str)
    console.log('setted!')
})

// alert(window.innerWidth);

document.getElementById('mobile-menu-js-ev').addEventListener('click',mobileMenu)