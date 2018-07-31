>>> import bcrypt
>>> hash1 = bcrypt.hashpw('test'.encode(), bcrypt.gensalt())
>>> print(hash1)
$2b$12$Wdc2qwiP6u0WdQdKwmer7.DMIcY6q76GxvrJgaodnpRDmpP8mwkDa

>>> bcrypt.checkpw('test'.encode(), hash1)
True

def validate_login(request):
    user = User.objects.get(email=request.POST['email'])
    if bcrypt.checkpw(request.POST['password'].encode(), user.pw_hash.encode()):
        print("password match")
    else:
        print("failed password")                    