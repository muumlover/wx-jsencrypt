var JSEncrypt = require('./jsencrypt');
var encrypt = new JSEncrypt.JSEncrypt();
var decrypt = new JSEncrypt.JSEncrypt();
encrypt.setKey("-----BEGIN PUBLIC KEY-----\
MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQC3IJ9m6Z/uLfHGsDl3ZsD7na8Y\
HlK8dySw+lZmlDtL4ADOKNSm95Pl3XIe60S2+m74IjeayfC+FGMaLmkg78EwvB2b\
+g2q0qFnxy5VlcKJKdu/mmbVbJA3NSMnqkFRUv7zqCpmYoY8Q3STJAGeSQ3mfjHN\
qtZ3XoOXA970AGBkcwIDAQAB\
-----END PUBLIC KEY-----");
decrypt.setKey("-----BEGIN RSA PRIVATE KEY-----\
MIICXQIBAAKBgQC3IJ9m6Z/uLfHGsDl3ZsD7na8YHlK8dySw+lZmlDtL4ADOKNSm\
95Pl3XIe60S2+m74IjeayfC+FGMaLmkg78EwvB2b+g2q0qFnxy5VlcKJKdu/mmbV\
bJA3NSMnqkFRUv7zqCpmYoY8Q3STJAGeSQ3mfjHNqtZ3XoOXA970AGBkcwIDAQAB\
AoGBAKVmkLLKBoqA8uQrXOwsYdehd3lIQiA5WGmE4i7qaZhBbVjHZjKcYPf4CFBG\
3RyLm1kAxspG5Os5zLzj+E4oXosXfHLKjcZblskShWBeFS3YQcKZWHfQ/W1+Bc9U\
Iuu75jA50Su8OHFshEiV1jX21+cvvtD2gLnLFzFkoFzOZZsRAkEA4woWO6FsBtYh\
0c6ZXi11Xv3zFh6pQJTPtEkVLPDcXD9cweWRMw0GiV2WphAu0xMYfz7P5aBkvgzx\
Ctg6ywevewJBAM58mg2iUsv/JrFj0prUo8XiylYoQkYowteHZatXqaHqxbutGibj\
Tc/lmb4SmV5Hud+7ha+CsuxeZH7a468C0WkCQQDYnmoiENziFPKFnKoGCjdfH8sM\
AssXvCQEbmpOy6xkM2xL772+yKHA9FNlNDGI4EJSPdrby1HzZqOg5jgKONX7AkAJ\
VEXdkdTt1JRZ9WmhhzPzD+EWbXE5HERZWou0ZxyJ7UKLzTFeSmzMlNISbWKyiMkU\
G7PZjy0oUsd1l8wrrxPpAkAYwlK/HMZqd7VRBt/P5uTbVQY09GSZOh6yzoNABhXj\
0ywkcHUsPe/FZ3V7y1BbTxLBFamtedQlGq1CJI/q7WLR\
-----END RSA PRIVATE KEY-----");
var text = 'test';
// Encrypt the data with the public key.
var enc = encrypt.encrypt(text);
// Now decrypt the crypted text with the private key.
var dec = decrypt.decrypt(enc);
// Now a simple check to see if the round-trip worked.
if (dec === text) {
  console.log('It works!!!');
} else {
  console.log('Something went wrong....');
}
enc = 'ZXi3FzU4+6T6cCLtqxTznVMWFCpekLJOjx9zxYR4I1t/fEiKkIZoWgzaMVpOAiFXkSc59m2meOfnN7s5g+lMIXhc7VVCmtrtZ+PsUZIS2S0Ia7At3kuMg31vOjnehdj3M9eJF6kPND6i4eW+2fSNDxQqUtKPses7VUVAstKP54k='
var dec = decrypt.decrypt(enc);

console.log(dec);
