import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "./halaman.css";
function HalamanDepan() {
  return (
    <div className="container">
      <div className="row justify-content-center">
        <h1 className="text-center">
          "Pendidikan untuk Meraih Kesuksesan di Era Globalisasi"
        </h1>
        <br />
        <br />
        <br />
        <div className="col-12">
          <Carousel fade>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://images.unsplash.com/photo-1606761568499-6d2451b23c66?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
                alt="Second slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                alt="Third slide"
              />
            </Carousel.Item>
          </Carousel>
        </div>

        <div className="col-6">
          <p>
            Pendidikan pada dasarnya adalah kegiatan belajar dan mengajar yang
            dilakukan secara turun temurun berdasarkan perkembangan pengetahuan
            melalui pengajaran ,pelatihan,dan penelitian namun diera globalisasi
            modern pembelajaran dapat dilakukan secara otodidak tanpa harus ada
            kegiatan mengajar.Pada umumnya sarana pendidikan terdapat beberapa
            tahapan mulai dari pendidikan usia dini atau prasekolah , sekolah
            dasar, sekolah menengah, dan perguruan tinggi.
            {/* <br />
            Seseorang akan sangat sulit meraih kesuksesan apabila tidak menempuh
            beberapa tahapan melalui sarana pendidikan, walaupun di era
            globalisasi seseorang dapat belajar secara otodidak namun akan
            merasa kesulitan karena tidak mempunyai bekal dasar untuk mengejar
            semua yang ditargetkan walaupun faktanya memang tidak semua orang
            yang berpendidikan sukses dalam perjalanan hidupnya, tetapi jika
            dilakukan perbandingan maka orang yang berpendidikan tetap jauh
            lebih banyak yang bisa mengecap kesuksesan daripada orang yang tidak
            pernah mengecap pendidikan, baik pendidikan formal maupun non
            formal. */}
          </p>
        </div>

        <div className="col-6">
          <img
            src="https://media.istockphoto.com/photos/young-asian-girl-working-at-a-coffee-shop-with-a-laptop-picture-id1054986474?k=20&m=1054986474&s=612x612&w=0&h=dzJrL98gkiNK7LT4XaXdGnuHapn_WWfw1CGBugYEdDA="
            className="rounded float-end"
            alt="student"
          />
        </div>

        <div className="col-6">
          <img
            src="https://media.istockphoto.com/photos/college-students-discussing-project-on-laptop-in-classroom-picture-id1357255137?k=20&m=1357255137&s=612x612&w=0&h=4pKzxaJwXc4yworFCksEDX9pfSZOr556d12HIdaldoI="
            className="rounded float-end"
            alt="student"
          />
        </div>

        <div className="col-6">
          <p>
            Seseorang akan sangat sulit meraih kesuksesan apabila tidak menempuh
            beberapa tahapan melalui sarana pendidikan, walaupun di era
            globalisasi seseorang dapat belajar secara otodidak namun akan
            merasa kesulitan karena tidak mempunyai bekal dasar untuk mengejar
            semua yang ditargetkan walaupun faktanya memang tidak semua orang
            yang berpendidikan sukses dalam perjalanan hidupnya, tetapi jika
            dilakukan perbandingan maka orang yang berpendidikan tetap jauh
            lebih banyak yang bisa mengecap kesuksesan daripada orang yang tidak
            pernah mengecap pendidikan, baik pendidikan formal maupun non
            formal.
          </p>
        </div>
      </div>
      <br />
    </div>
  );
}

export default HalamanDepan;
