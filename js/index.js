function checkUserData(username, password){
    var usernameDb = 'aku@gmail.com';
    var passwordDb = '1234';

    var validasiUSer = username == usernameDb;
    var validasiPass = password == passwordDb;

    if(!validasiUSer){
       alert('Username anda salah');
    }

    if(!validasiPass){
        alert('Password anda salah');
    }

    if(validasiPass && validasiUSer){
        alert('Anda berhasil login');
    }
}

// console.log('Bendry Belajar');

// //array
// var telurArray = ['Gado-gado', 'Ketoptrak', 'Omlet'];
// telurArray.splice(0, 1);
// telurArray.push('Dadar');
// console.log(telurArray[2]);
// console.log(telurArray);

// //object
// var rumah = {
//     lebarTanah : 50, 
//     lebarBanguanan : 100,
//     warna : 'hitam',
//     kids : [
//         'Arya',
//         'Juan',
//         'Fabil',
//         'Ririn'
//     ]
// }

// console.log(rumah);
// console.log(rumah.warna);
// console.log(rumah.kids[3]);