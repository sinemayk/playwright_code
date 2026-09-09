import * as dotenv from "dotenv";

//.env dosyasini okuyup icindeki tum degiskenleri process.env objectine yukluyoruz,
//boylelikle process.env.DEGISKEN_ADI seklinde degiskenlere erisebiliriz
//process Node.js in yerlesik ve global bir objectidir ve programin calistigi ortam hakkinda
//bilgileri tutar
dotenv.config();
const validUserNAME = process.env.SAUCEDEMO_USERNAME_VALID;