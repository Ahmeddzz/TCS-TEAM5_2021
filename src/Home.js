import React from "react";
import Employee from "./Employee";
import "./Home.css";

/*test */
function Home() {
  return (
    <div className="content">
      <div className="home__container">
        {/* <img
          className="home__image"
          src="https://nextbigbrand.in/wp-content/uploads/2019/01/Tata-Consultancy-Services-TCS.jpg"
          alt=""
        /> */}
        <div className="home__row">
          <Employee
            name="Theodora Ergun"
            image="https://media-exp1.licdn.com/dms/image/C4E03AQFzaU63ZsqZRQ/profile-displayphoto-shrink_800_800/0/1607461595613?e=1639008000&v=beta&t=wEPU965szOq_9VP2-5N3H6Kf0gDadniRdUc2qXpAZKo"
            country="Belgium"
            education="Full-stack Web Development"
            account="ENGIE"
          />
          <Employee
            name="Stefan Pauck"
            image="https://media-exp1.licdn.com/dms/image/C4D03AQGqASMZOdGZgg/profile-displayphoto-shrink_800_800/0/1541687031033?e=1639008000&v=beta&t=24vD-_CRfD2HtjQ3fC2xrpSKD1PAQhQvZOYIEmqs4jw"
            country="Denmark"
            education="Full-stack developer"
            account="TRYG"
          />
          <Employee
            name="Ayoub Abdelouarit"
            image="https://media-exp1.licdn.com/dms/image/C5603AQHxk2TiHqVNUw/profile-displayphoto-shrink_800_800/0/1575854987680?e=1639008000&v=beta&t=dlL-BqtH94Cdb5oKXH_LXo9sbqvQrBGlw2r6bkmu1RQ"
            country="The Netherlands"
            education="Msc Data Science"
            account="KLM"
          />
          <Employee
            name="Riina-Mariia"
            image="https://media-exp1.licdn.com/dms/image/C4D03AQGKJOOGOHde-w/profile-displayphoto-shrink_800_800/0/1630960728103?e=1639008000&v=beta&t=w5UHndsKDtuzHnO8Hjk2VtMF-ATszcJfgwQaSIebpps"
            country="Finland"
            education="BBA in Information Technology"
            account="Elisa"
          />
          <Employee
            name="Soufiane Darraz"
            image="https://media-exp1.licdn.com/dms/image/C4D03AQGdbwkEIRvngA/profile-displayphoto-shrink_800_800/0/1597337576998?e=1639008000&v=beta&t=vUHAWQrxC8S1M-ca5hZ5KB2hbT3rvV50cXOSw1LNcvI"
            country="The Netherlands"
            education="MSc Applied Data Science"
            account="KLM"
          />
          <Employee
            name="Antonius Respati"
            image="https://media-exp1.licdn.com/dms/image/C5603AQEfc9BQcmo8mw/profile-displayphoto-shrink_800_800/0/1574256169149?e=1639008000&v=beta&t=RDDaxGQ8PpRs7qryKhpIJxICSA-UdV4Akv9j0FleGIc"
            country="The Netherlands"
            education="MSc Applied Data Science"
            account="KLM"
          />
          <Employee
            name="Ahmed Zahran"
            image="https://media-exp1.licdn.com/dms/image/C4D03AQFWS6cGxSj0yA/profile-displayphoto-shrink_800_800/0/1607005165155?e=1639008000&v=beta&t=BtV9VbsefxcgkCpyWizMXpTg3_5pU-4HGff-NquwbJ4"
            country="The Netherlands"
            education=" MSc Systems and Control"
            account="ASML"
          />
          <Employee
            name="Mozahidul Islam"
            image="https://www.pngkey.com/png/detail/765-7656718_avatar-blank-person.png"
            country="Germany"
            education="BSc Computer Science and Software Engineering"
            account="AXA"
          />
        </div>
        <div className="home__row">
          <Employee
            name="Sina Grosser"
            image="https://media-exp1.licdn.com/dms/image/C4E03AQEY9RJ_maICWw/profile-displayphoto-shrink_800_800/0/1610795031491?e=1639008000&v=beta&t=36McdoeyJyk5vDCZqTe20k25xeKqnEZb9JDA0gfvGYs"
            country="Germany"
            education="MSc International Business"
            account="Zurich"
          />
          <Employee
            name="Saipreeta Kadle"
            image="https://media-exp1.licdn.com/dms/image/C4E03AQF1ZfoETektYQ/profile-displayphoto-shrink_800_800/0/1604003540267?e=1639008000&v=beta&t=NmjLL1RA6C_F0jAOrTFsQUOdzJlk8fLcDeaBX1Orfm4"
            country="Germany"
            education="MSc Management in Strategy and Organization"
            account="Schwarz Gruppe"
          />
          <Employee
            name="Philip Sandell"
            image="https://media-exp1.licdn.com/dms/image/C4D03AQG7rL5_bpgKWg/profile-displayphoto-shrink_800_800/0/1615556100215?e=1639008000&v=beta&t=Mrx0Dzg-IOgX4k_ueupJIRLbkOFt6_0eoAsLYxKaSxw"
            country="Sweden"
            education="BSc Informatics and System Development"
            account="H&M"
          />
          <Employee
            name="Omar Abbas"
            image="https://www.pngkey.com/png/detail/765-7656718_avatar-blank-person.png"
            country="The Netherlands"
            education="MSc Systems and Control"
            account="ING"
          />
          <Employee
            name="Houssain Taibi"
            image="https://media-exp1.licdn.com/dms/image/C4D03AQHmqY32fPTVsw/profile-displayphoto-shrink_800_800/0/1587486690177?e=1639008000&v=beta&t=2IuFY8qFNk03CO2SXUNHqtHwWCJNBQECrPTnK2IoxeE"
            country="The Netherlands"
            education="Data Science"
            account="NXP"
          />
          <Employee
            name="Boris Vacchi"
            image="https://media-exp1.licdn.com/dms/image/C4E03AQH3G_H2NbPyrg/profile-displayphoto-shrink_800_800/0/1623672978710?e=1639008000&v=beta&t=RiCfQ7IIpcuderf2RTh_P25VCzXSb_q20XfELaL7dQ4"
            country="Italy"
            education="Smart Manufactering"
            account="Unicredit"
          />
          <Employee
            name="Jett Nkembe"
            image="https://media-exp1.licdn.com/dms/image/C4D03AQHLG_fj6290Pg/profile-displayphoto-shrink_800_800/0/1596099430139?e=1639008000&v=beta&t=tMmI7UgRfOKKxYslIdCP4ergyKWdjiCf2c-T5pNxen0"
            country="France"
            education="MSc Management of Information Systems"
            account="LVMH PCIS"
          />
          <Employee
            name="Riccardo Femiano"
            image="https://media-exp1.licdn.com/dms/image/C5603AQG9fLEEl2w3Rg/profile-displayphoto-shrink_800_800/0/1571126494989?e=1639008000&v=beta&t=M_tjgp6K3qvSsHV8u_SfojyliViFbbNSf_oyZEa4VdU"
            country="Switzerland"
            education="Health Sciences & Technology"
            account="Die Mobiliar"
          />
        </div>

        <div className="home__row">
          <Employee
            name="Video"
            image="https://www.mm.be/userfiles/media/1589911585_1589906822-video.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
