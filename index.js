const apiUrl = 'https://7103.api.greenapi.com'; // replace with your API URL

function displayOutput(response) {
    document.getElementById('output').textContent = JSON.stringify(response, null, 2);
}

async function getSettings() {
    const idInstance = document.getElementById('idInstance').value;
    const apiTokenInstance = document.getElementById('apiTokenInstance').value;
    const url = `${apiUrl}/waInstance${idInstance}/getSettings/${apiTokenInstance}`;
    try {
        const response = await fetch(url);
        const data = await response.json();
        displayOutput(data);
    } catch (error) {
        console.error('Error:', error);
    }
}

async function getStateInstance() {
    const idInstance = document.getElementById('idInstance').value;
    const apiTokenInstance = document.getElementById('apiTokenInstance').value;
    const url = `${apiUrl}/waInstance${idInstance}/getStateInstance/${apiTokenInstance}`;
    try {
        const response = await fetch(url);
        const data = await response.json();
        displayOutput(data);
    } catch (error) {
        console.error('Error:', error);
    }
}

async function sendMessage() {
    const idInstance = document.getElementById('idInstance').value;
    const apiTokenInstance = document.getElementById('apiTokenInstance').value;
    const receiverPhoneNumber = document.getElementById('receiverPhoneNumber').value;
    const message = document.getElementById('message').value;
    const url = `${apiUrl}/waInstance${idInstance}/sendMessage/${apiTokenInstance}`;
    const payload = {
        chatId: `${receiverPhoneNumber}@c.us`,
        message: message
    };
    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
        });
        const data = await response.json();
        displayOutput(data);
    } catch (error) {
        console.error('Error:', error);
    }
}

async function sendFileByUrl() {
    const idInstance = document.getElementById('idInstance').value;
    const apiTokenInstance = document.getElementById('apiTokenInstance').value;
    const receiverPhoneNumber = document.getElementById('filePhoneNumber').value;
    const fileUrl = document.getElementById('fileUrl').value;
    const url = `${apiUrl}/waInstance${idInstance}/sendFileByUrl/${apiTokenInstance}`;
    const payload = {
        chatId: `${receiverPhoneNumber}@c.us`,
        urlFile: fileUrl,
        fileName: "file",
        caption: "file"
    };
    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
        });
        const data = await response.json();
        displayOutput(data);
    } catch (error) {
        console.error('Error:', error);
    }
}
