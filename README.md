 ## React with FireBase blog App project
This is React and FireBase & FireStore based simple blog platform. Which app allows creating Cv page and Prossesive Web Apps

You can learn how useable the blog at gitHub and if you get some issues you can ask again gitHub. You want add some modules or feature please contact me

###Türkçe
  Kişisel olarak kendim için geliştirdiğim, Kişisel blog ve Cv uygulamasını Open Source olarak geliştiriyorum. İnternetten ön izleme yapmak için şu linke bakabilirisniz. (https://blogreact-cca02.firebaseapp.com)

  Bu uygulamayı geliştirirken tamamen ön tarafa odaklandım. Arka taraf için Firestore kullandım. Eğer aynısından kendinizede oluşturmak isterseniz. Projeyi init yaptıkdan sonra Firebase 'den kendinize ait üyelik oluşturun ve config bilgilerini /src/config/Fbconfig.js dizinine yapıştırın. Admin panel için
  /localhost:3000/admin adresine girmelisiniz. Eğer üyeliğinizin Admin propertisi var ise ve firestore daki admin collectionunda da var ise giriş yapacaktır. Yinede securty rules lerde kullanılmıştır.

### Türkçe
## Table of Contents

- [Admin Panel](#admin-panel)
- [About](#about)


#admin-panel
(https://2.bp.blogspot.com/-_uwO-S3e7wQ/W-mhqUM6z7I/AAAAAAAAAXs/7l8Qld-wcNEsdVpj_6wMeu6N1SNCFklpACLcBGAs/s1600/Capture.JPG)
(https://1.bp.blogspot.com/-PlZlFWLXOnc/W-mhqghB8zI/AAAAAAAAAXw/Ow2OUbq3OEk6l8N-Ou4A6-6TyDxr7UChwCLcBGAs/s1600/Capture1.JPG)
(https://2.bp.blogspot.com/-rnwPeBFC2MY/W-mhq-K6pbI/AAAAAAAAAX0/mZ8SP-gmSFwWfQJGait0QnoFuGs_S8dYACLcBGAs/s1600/Capture2.JPG)

Uygulamaya yeni biri uye olduğunda yada yorum yaptığında Notifications componentinde görülür.Bunun için Cloud functions kullandım.
Eğer içeriklerden herhangibi birine tıklarsanız AddBlog Componenti yerine Update Blog Componenti gelir.



#about
(https://1.bp.blogspot.com/-U1RQIwmsaro/W-mhrbRW9MI/AAAAAAAAAX8/60lPoFI_x88QBaJri5hOLGJnLNLfJCs0gCLcBGAs/s1600/Capture4.JPG)
Admin olmayan biri componenti yukarıdaki gibi görür. Admin olan biri ise componentin contentini ck editor içinde görürür ve güncelleyebilir.
(https://3.bp.blogspot.com/-n6SLwGYkBys/W-mhrKM0pqI/AAAAAAAAAX4/OjHbInfaVn4rgHwvlIbdpThkTOfP5TCTgCLcBGAs/s1600/Capture3.JPG)


Düzenli ve İngilizce dokumantasyon eklenecektir. Eksikler vardır zamanla gideriliyordur.