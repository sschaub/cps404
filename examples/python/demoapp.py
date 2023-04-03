# To run: flask --app demoapp --debug run

from flask import Flask, request

app = Flask(__name__, static_folder='images')

def valid_login(username, password):
    return username == 'Fred' and password == 'pass'

@app.route('/')
def main():
    return LOGIN_PAGE

@app.route('/dologin', methods=['POST', 'GET'])
def login():
    error = None
    theUser = request.form['theuser']
    if request.method == 'POST':
        if valid_login(theUser,
                       request.form['thepass']):
            return 'Successful login'
        else:
            return 'Invalid username/password'

LOGIN_PAGE = """
<html>
<body>
<img src="images/fred%20and%20joes.webp">
<h2>Fred &amp; Joe's Pawn Shop</h2>
<form method="post" action="dologin">
Username: <input type="text" name="theuser" value="Fred"> <br>
Password: <input type="password" name="thepass"><br>
<input type="submit" value="Go">
</form>
</body>
</html>
"""