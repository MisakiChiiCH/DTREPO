//Menu Starts Here
const hambuger = document.querySelector('.hamburger');
const navList = document.querySelector('nav ul');

hambuger.addEventListener('click', () => {
	hambuger.classList.toggle('active');
	navList.classList.toggle('active');
});

//Dark to Light Mode

const darkModeButton = document.getElementById('darkModeButton');
const body = document.body;

const enableDarkMode = () => {
	body.classList.add('dark-mode');
}

const disableDarkMode = () => {
	body.classList.remove('dark-mode');
}

darkModeButton.addEventListener('change', () => {
	if(darkModeButton.checked) {
		disableDarkMode();
	} else {
		enableDarkMode();
	}
});

//Multiple text

const typed = new Typed('.multiple',{
	strings:['Front-End Developer', 'Web Designer', 'Streamer', 'Cosplayer'],
	typeSpeed: 100,
	backSpeed: 100,
	backDelay: 1000,
	loop: true
});

//Downloads CV
document.getElementById('download-cv').addEventListener('click', function() {
    // Create an invisible anchor element
    const link = document.createElement('a');
    link.href = 'mariel-cv2025.pdf'; // Replace with the actual path to your PDF file
    link.download = 'marieltemblorCV.pdf'; // Desired filename for the download

    // Append the link to the body (necessary for triggering the click)
    document.body.appendChild(link);

    // Programmatically click the link to trigger the download
    link.click();

    // Remove the link after download is initiated
    document.body.removeChild(link);
});