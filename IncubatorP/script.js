// document.getElementById('contact-form').addEventListener('submit', function(e) {
//     e.preventDefault();
//     alert('Thank you for your message. We will get back to you soon.');
//     this.reset();
// });


document.addEventListener('DOMContentLoaded', function() {
    navigate('home');
});

function navigate(page) {
    const content = document.getElementById('content');

    switch(page) {
        case 'home':
            content.innerHTML = `
                <section>
                    <h2>Welcome to Social Impact Project Incubator</h2>
                    <p>Empowering Social Entrepreneurs for Rural Development.</p>
                </section>
            `;
            break;
        case 'about':
            content.innerHTML = `
                <section id="about">
                    <h2>About Us</h2>
                    <p>Our aim is to support social entrepreneurs by providing them with a platform that includes access to funding opportunities, expert guidance, and a collaborative space. We facilitate connections between entrepreneurs, mentors, investors, and other stakeholders to foster positive social change.</p>
                </section>
            `;
            break;
        case 'contact':
            content.innerHTML = `
                <section id="contact">
                    <h2>Contact Us</h2>
                    <form id="contact-form">
                        <label for="name">Name:</label>
                        <input type="text" id="name" name="name" required>
                        
                        <label for="email">Email:</label>
                        <input type="email" id="email" name="email" required>
                        
                        <label for="message">Message:</label>
                        <textarea id="message" name="message" required></textarea>
                        
                        <button type="submit">Send Message</button>
                    </form>
                </section>
            `;
            document.getElementById('contact-form').addEventListener('submit', function(e) {
                e.preventDefault();
                alert('Thank you for your message. We will get back to you soon.');
                this.reset();
            });
            break;
        case 'mentor':
            content.innerHTML = `
                <section id="mentor">
                    <h2>Mentor Program</h2>
                    <p>Join our mentor program to guide and support social entrepreneurs in their journey.</p>
                </section>
            `;
            break;
        case 'login':
            content.innerHTML = `
                <section id="login">
                    <h2>Login/Sign Up</h2>
                    <form id="login-form">
                        <label for="username">Username:</label>
                        <input type="text" id="username" name="username" required>
                        
                        <label for="password">Password:</label>
                        <input type="password" id="password" name="password" required>
                        
                        <button type="submit">Login</button>
                    </form>
                    <p>Don't have an account? <a href="#" onclick="navigate('signup')">Sign Up</a></p>
                </section>
            `;
            document.getElementById('login-form').addEventListener('submit', function(e) {
                e.preventDefault();
                alert('Logged in successfully.');
                this.reset();
            });
            break;
        case 'signup':
            content.innerHTML = `
                <section id="signup">
                    <h2>Sign Up</h2>
                    <form id="signup-form">
                        <label for="new-username">Username:</label>
                        <input type="text" id="new-username" name="new-username" required>
                        
                        <label for="new-password">Password:</label>
                        <input type="password" id="new-password" name="new-password" required>
                        
                        <button type="submit">Sign Up</button>
                    </form>
                    <p>Already have an account? <a href="#" onclick="navigate('login')">Login</a></p>
                </section>
            `;
            document.getElementById('signup-form').addEventListener('submit', function(e) {
                e.preventDefault();
                alert('Signed up successfully.');
                this.reset();
            });
            break;
    }
}
