import React from 'react';
import styled from 'styled-components'
import 'react-bootstrap-table/css/react-bootstrap-table.css';
import { Container, Col, Row } from 'react-bootstrap';


const ImgConst = styled.img` 
    object-fit: none;
    object-position: center;
    width: 100%;    
    max-height: 100px;
    margin-bottom: 1rem;
    margin-top: 2px;
`
const ImgDP = styled.img`
    margin-left: auto;
     margin-right: auto; 
    object-position: center;
    width: 100px;    
    max-height: 200px;
    margin-bottom: 1rem;
    margin-top: 2px;
`
const SubHead = styled.h2` 
    //font-family: 'Open Sans';
    font-size: 20px;
    color: #0091ea;
    margin-bottom: 10px;
`
const SubTitle = styled.h2` 
text-align: center;
    //font-family: 'Open Sans';
    font-size: 20px;
    color: #0091ea;
    margin-bottom: 10px;
`
const MyPara = styled.p`
    margin-top: 3px;
    font-size: 20px;
`
const MyName = styled.h2`
    text-align: center;
    margin-top: 3px;
    font-size: 15px;
`

class About extends React.Component{
    state = {
        data : [
            {id: 1, name: 'Gob', value: '2'},
            {id: 2, name: 'Buster', value: '5'},
            {id: 3, name: 'George Michael', value: '4'}
          ]
};
     
    render() {
        return(
            <div>
              {/* <ImgConst src="https://images.pexels.com/photos/208512/pexels-photo-208512.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=350&w=1000" ></ImgConst> */}
              {/* <ImgConst src="https://lh3.googleusercontent.com/xLpORHYFm0R7ruu-a42O5hLyDYHY1hDcru-isqGUzDlwvOaZlV7zaFrlfbRU3lNX0uyQb9WuUezS2ecgiH7VCksnwPdY-fBhgyD5Wuwbr3ngkapLT3CGmR3ArsWgbToWIjRjAyrpAu9CLb_VmBOpRvz8Gl4jeEUpwPH_P0-XQLYX2T8yikNQiOi8Ys0b3_0XSNLT2BWWyL9wkXe1iL_dTeNkAHDjoUhlZvaxFIBirBtpI9yB-Ty-HEvGaEm_6et4WRcD633Z1EzXYdIpUU0PouGvx948EqYFpJIDoYHCHKcMkvs3xYyFRLVmwP4RDfDnR4zY-ysk-WwKQ9cve_htrGMRW9I26xRsOl08IeDCpi4RY9dAhnbfTnLieHdNMjbTQRNOwrXH2-kB4ZOcwIuop0WZJy5sqqQ5J6zM1XS8NjyTu-i8aqP9B8p-bkoYXQaVBGUsmDqUJ4bbx_HCRvZk34o7L_O8IZRwSc44L0VW-0jxJ6_7Vi1Z8-RdUDIBv6B1Ofj8UYnMU9lv7t5zhQ_Z7ZL-RlDSEeTqDTBQuxfXgv-OEz9ZPFLyOAyuuYKK2LaXrcnMZ1KrB0qjOmdNseuaB787VJeQ8WYZT2Qq5v6BsG9SV-YVLcc2g6q-g2_Ux4CPWraY2r8RgiVaCd8Hc0Z7vsxvBTY93UpA2-cq0CV1DCxKbxGiSPrh1cfH140LPNjQIQBHpVJs3EpaDKZJhmgR6M0RE16O1wwMVxaQRoDomKevFHzN=w385-h264-no" ></ImgConst> */}
              {/* 
                // @ts-ignore */}
              <img src="https://lh3.googleusercontent.com/qDQDY6h6TI66_1SUyt6XdVie84XKXErJ8N57LkGSg_zXCvqMBPIONO5TlZZueNXODEr18gwP-7uVCHcggP-gQMn-q3dTWwWqKt7f1Na3VuVGumAHTzQsWHSZYRLPCY5mkkaFxLpY9lobu5GzYQf9u0XSiZvVXuxvIfPRtKMDeOei9SHaSJoi0U7NLbeJuUoF25FtjEeOpAi2JQwaykTjXDzX0smMgVgohwsM2IxKl1j52-H5YD23rZMrCIKMwKVPUMzO_FQIhYCJ6u8t3b1xLItIJ5RO3UqZ-0WDDfeebRLq26QWJNCsmsHLpU5S9eFo03t11Ue0xqA060pGeY8U3073P_-8WeQFJy5rZrYebPh43asS6mgo5NkrRZOilypKATco0rHasSSZKg18r53ZAh9Yk5jtN7Ir4KFkag6KaX8mH5JBtnxDN2fGxGnklkbk-mjzuYk1khjswmlR24jApK6NthYFOw3ottyfYxof9HF9DPmOjPscMOfar2taevOEEPDa2EwFXNhQvo0KnlUkoGzeummbD0Hz0zB3guOWHccmGEMNKM3CNmLqYheZBq0FZQAS91lmv29SIqyKgc943OSkgd-AcIL0Gnh1fDF0rEnpJb0y_iJgp7LLxm08NML0VAos8yWgn6PJUUCsfg2BhUGlWAoMIXs1TVJuHvFjgH3LznhdWbqVKF8b0VEZxRH--8yWS2tz78QnTUO4yb5ZuhHYgOb_tNUWut1J2nc3q2UO-Sa0=w500-h211-no"  class = "rounded mx-auto d-block"></img>
            <h1>PharmaCare</h1>
            <SubHead>Delivering your prescriptions when you need them, where you need them</SubHead>
            <div>
            <MyPara>At PharmaCare we deliver your prescriptions on your terms because we believe that you should never have to compromise on the health and wellness products you need for yourself and your loved ones. That's why we offer a broad selection of carefuly curated, FDA approved products, all available online and delivered right to your door.</MyPara>
            <MyPara>We're a fast growing, proudly Canadian company that's passionate about our customers, our business and the products we sell. There’s a real person behind every item we offer, every package we ship, and every interaction we have with you, because we love sharing our passion for health and wellness with you.</MyPara>
            <MyPara>Whether you're running short on time, don't have access to a pharmacy or want to try something new you can be confident that you’ll have a great experience with PharmaCare for yourself and your family.</MyPara>
            </div>
            <div>
            <h1>Meet Our Team</h1>
                <Container>
                    <Row>
                        {/* 
                        // @ts-ignore */}
                        <Col > <img src = "https://lh3.googleusercontent.com/1uyfqQnycAdq_jFsv8Lbd777jgCw5u0ZU2GDXhv7-6HJGlKHkL_KHrzd17xpSxQRMEeeV451Dd062nAEenkhxGjSgsixU-IeHTBfg1DPsMn4nj0Rm8y4cigufzYSVU7VowIw-kCHSan5yFpBGw5DAcZVKAwdjHfw-9Ahqxl3-mOWDG77y9qwCqyNy1DT_WN88nUc_G8bw2LncQZGnly0F9Dzos9QPTKjvuay6Air-qKD4h-ACW716EGDimFKm_ht7xkvfbGThTcBcoF1Mvbq-izhbduQ_mMRR_SUP5EmvMPQnyyDHeBy3BI2cOfz7e8tYE9El7M8cI8L95rzb2T_0a21oQlNde0V46YTX7j2Qnf2Nv9d-iB0LqYDtnDB2IDXXvgMPbICs5iRQKs0A8oMwpygR7XWOnen7wkd4zHGjIuo5G-V68ISytIDxexDcNy6z5Wt7Kj-DjIz327Y_6CgaAFJPZBpyXTcEnFdukbsMjqEP5hKllkyAWbX1H0fBA2RZ9j0-gxebruKOXA_QcYSxfKXN6-jrXDziYVeXjuXo2_aqrNS4IJEb4Oc3J8Ph2LOgTOu1bMPSUITawWGvgM9Ize-p_LvocTV0nFdd0FMdfTiFkz7pWE-4uGBySgkytVlQtqZKVwH051g0M7t65-Rn3uODnozM-ikxZw9d2UNwAQGfxEhs44DiGRqE1eL9fJCE2I99I2B_FLJ7THvxBZ2bouvzPpN2xMWon5uXPZXu61M_GOy=w168-h185-no"  class = "rounded mx-auto d-block"></img><SubTitle>CEO</SubTitle>
                        <MyName>Mashin Rahman</MyName><p>Mashin likes long walks along the beach, going for bike rides and baking. He graduated top of his class in Gender Studies from the University of Calgary.</p></Col>
                        {/* 
                        // @ts-ignore */}
                        <Col ><img src = "https://lh3.googleusercontent.com/031AGDO_fN-sjjUjxa8U47_hjwYAq9e9dzUpw44Sbm44IICSqvT-Tv9Tt4KSrAGAXaDlDllWY1UBh_KkkFxqPn7u0I4GVmsHQl3NN1OIa5lmVszA13H5gku9oqGxOG9p6ZJWY-4KQb82tOx7piXvMzMHq5OO7y6g3WtX8HY-s4XCxPXXH-Cc7T72g1cMJQsQetBKhxoNhNwAxLBMsnJUvRF7u2j8_40Xdq9rtW2fsgun-Ct2OLKnsjSWAwikIMPxT7g6WKSg8a1TH0xpA5XtZ0bF08a8m4OM4ud8CxIB6dDtksJgDf5DqASRX7pyLOdUOQ6qfe9LqhQ7CVfQ_ofuUidMxveqgprR4sa-EyMr7mIHiveQbSaLZtBpcvGWuDarBxrWWhDtrqlKvWsAhJSH5_NQpdIzCB8LHUg2Z0D46F8U1qaF9UlFm8yfNRFyRscz6P7z5P4kpHGWhcTHEBxq4BhlQGvkbZ_XYjptYMV2bT_AFnhWOO_tOnrQVx1NdeVqrvQJ7IfDz8JLgNS_38IlaSwAto9HJz7jIe68Nl8CSRoZryvdx2rNyii6IFQsQCZlUIOJxDSyKXcQ4mRKk2YNnoLWcLTbc3JudT7Ucnoec6QtJzRLbj3gRnDhQTCm6x50QLZP3T768N-EhjHfCd3zVPQkw0ZbMPuHS-Cs7lO91OhY544tq9bqQRad66YZOi2_JWWrgfgi0NDUAPJpSuD1nc-bZqrlEDimck0Ndh9aOQxPGOjL=w268-h435-no" class = "rounded mx-auto d-block"></img> <SubTitle>COO</SubTitle> 
                        <MyName>Abnoot Gill</MyName> <p>Abnoot is currently a 3rd year engineering student, majoring in software engineering with a specialization in biomedical engineering at the University of Calgary.  </p></Col>
                        {/* 
                        // @ts-ignore */}
                        <Col ><img src = "https://lh3.googleusercontent.com/EaEsApD-oHJlYzr2jtaWijaR2jMyfMNSNjPPXgdLaStPdh-G0sQd8Jo7tTzPNSmXlDob7LB-s-aMjxpBUred69NiI-W8OwZBvlPU3BN0mYVnneoBvHT_m-bICSO4VZ2a9fQAYW4jt6NBaD0nnKkzoBKAxbwqJF0WiTVKPWNyFamhdE9vT7M1wEV-hX1nB0azxQ3jLj_4nhRzvXvmyFsEnfJ0BYNx4MvhBTCZCbUOk_5BT-MN60nF6ksxrUhSX9z6iqpiwBZy5I3vBpya7qKPodYjQ3gNQ7R9O6wh7kGCgLNniLPSpB5XwsI-havgjzxqr4oa_tYD55VxdBlD1arMGM2m6Soj_kRc0jaFgGMms1iyK6SEUUpFdSBImKMpfVJpPmRdm0AqGWXpSJeDC7btFsuPqBwOy7l6qa73bqsEJJA-t1FB1tc8iCnF8g9IPz7joiC8roHDgedvJJ1-yLFSsyrnaxgkJCVU9dCJ2TYIGbawEjwmfZvhtsPDXhk_qmCb6a6fuDdPoz9Q5PsgHoT8mxSxzFlwKBLlQtkFH-5jsbDxUHNPYK5o3kuo4kneL1VArPeC_7v47vilZuRvYho6fXttWBnG5_On4d_dWn6WIbIx93q5MTwFSIZwmqysylHwoZ2owWxFBRNQcBJN57X7LhOQ-myaqauVmYIe4d4Yh30afjFomVhjHQmEy5BIYJpYQgiRvOZolrEx9kgQdILldFdTNWrok-J3jz9MvBoASVgE8ANE=w168-h185-no"  class = "rounded mx-auto d-block"></img> <SubTitle>CFO</SubTitle> 
                        <MyName>Cheena Tran</MyName><p>Cheena enjoys fork-bombing, volunteering at his local pet shelter and throwing rocks at the neighbours kids. He graduated top of his class in Equestrian Psychology from the University of Calgary. </p></Col>
                    </Row>
                </Container>                

                <div>
                    
                </div>
                {/* <SubTitle>CEO</SubTitle>
                <SubTitle>COO</SubTitle>
                <SubTitle>CFO</SubTitle> */}
            </div>
           
            </div>
        )
    }
}

export default About;

