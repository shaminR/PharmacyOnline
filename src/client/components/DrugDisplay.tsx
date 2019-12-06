import React from 'react';
import styled from 'styled-components'
import DrugButton from '../DrugButton';
import 'react-bootstrap-table/css/react-bootstrap-table.css';
import { Container, Col, Row, Button } from 'react-bootstrap';


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

const Title = styled.h1` 
margin-top: 80px;
text-align: center;
    font-size: 50px;
    margin-bottom: 80px;

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

class DrugDisplay extends React.Component{
    state = {
        type: '' 
    };

action = () => {
    this.props.history.push('./alldrugs');
}
showUpdated(){
    DrugButton.state = this.state;
    this.props.history.push('./displaymydrug');
}

chewable = () => {
    this.state.type = 'Chewable';
    this.showUpdated();
   // this.props.history.push('./displaymydrug');
}
pill = () => {
    this.state.type = 'Pill';
    this.showUpdated();
   // this.props.history.push('./displaymydrug');
}
ointment = () => {
    this.state.type = 'Ointment';
    this.showUpdated();
   // this.props.history.push('./displaymydrug');
}
spray = () => {
    this.state.type = 'Spray';
    this.showUpdated();
   // this.props.history.push('./displaymydrug');
}
syrup = () => {
    this.state.type = 'Syrup';
    this.showUpdated();
   // this.props.history.push('./displaymydrug');
}
    render() {
        return(
            <div class="text-center">
                <Title>Drugs Offered</Title>
                <Container>
                    <Row>
                        {/* 
                        // @ts-ignore */}
                        <Col ><Button variant="light" onClick = {this.chewable}><img src = "https://lh3.googleusercontent.com/QpsLFrd8wUfgpDCk8B99S0BQGJ-yDdLIpIU-VWe0DbuPOHPSaEqd1ZUOBs-5_JwBaiae6psd3DWSSDl8tcfwqDC2O3C-Zp3BhbrN8ZXoO5RmsfqId-nd9u-wSOAVaP7GNXi1N-5TG3inqV-ny8jkvKaSL3gd4KnApcDRW2_EVCN0A81dZfQOr5ocs6apglguWbU2sCNoREb7D-FQKic1ZRAfP0WYFyfzUqOH_nEgWfWG_Z1ZnGjIUw0HSQlUbf_NSJ4smaTNiK4y54kr3EMMaPVXCV_emPx03MrmGUKhclnfxUAHv6gkCCuiE10Lp4-vexTVxR1PoLoWqvu1lppTsVwUDZnlkcmiAI3czUKQA_4fiHl5gzvPJFwaaCNJYHHwUXEnmWuFWPhGZExwrvafWFxLnh8Lh-ssfBMgR8QYslV6_ehBA6spv_lGHZtGcQPizwcWxNrFMPoAQ9-mnEdFNFA8LugmLF3jQPkZHl5ogQNjV_A55bgcGufCAqVg-Dq5kw4mSJiv75W2H514Zk3do6seHTvmRcx0jiOV9BlJ4NFtGUU06j94mJ7i6rgER_CNWxQ4Jqrn0_Pci950TIIwdcAwKhbsexHv4fyxMvKHiVT7tuaaLn43wF03CWPZdK13NWXFXwbGOCNLv65h8faPuHOzGLVO3KzxdsHoFhwNZrQ7VmWumeEtTQs=w250-h200-no"  class = "rounded mx-auto d-block"></img></Button> <SubTitle>Chewable</SubTitle>
                        </Col>
                        {/* 
                        // @ts-ignore */}
                        <Col ><Button variant="light" onClick = {this.pill}><img src = "https://lh3.googleusercontent.com/XpMAbDmJuW77RNJKZhiyhOB6AhbdWqNKWizg69D6ZlPrfvYqrz9p4goXGbGFdIWWqMpvWC9x86JMzyls-gm0J5KeUA78xjSZdwD0yIYKENRv6cU00WNcCM_7-y5DZkBnng7YGBBaF166wtMcsYHlJKk1O4VVeGgV7HT1Yl5E1xNWkfeyNSCF1m4dfkUqI5u7NUQN47GRP2LjXWXZdr5r5H_pMCgg9IK_U2utDlp9-fAYIvcIjVLN6zkNu4ktDT_3diGZq_sP8LrCdicUTYJUWVhFgeZidRjlpc4hG47fDnKI-fwzRKD0zkQd6-C9depQGAxZBJyWrR_JCSmeG-a3NGB1SEtRFfjc-yxPKmIzY84jm1Psk3mWu8ZhRxKSgWQiJ6V_q_xIJJVEQwpc6nv6Qo-XrVuC8DTkg7LJCe664jr6DhH9GTtV1oUwgdMKjL8rWV_UhHUtFQQLq7X-cOdgKhli4_4iYRb5nEE2ZQCG-jtfkQ1LEyyMAt3gK5a7cSNdgDNazSC_2JUFUZbWC0lbliIJ7r3skvlVawF--6w1gXiADQbnEZCT9YuZI_l_ik1Yw_BHZ-oReq3MY_Bxhq9tlevH3pggQQr5NcW7VoFaEWMVK7h1HPEaJt7QiG4-xK8Pay137mSvFTDDzziNubtA1OPSBcdF7RgUjpP5klsFlPy7vffkVrAJmFg=w250-h200-no" class = "rounded mx-auto d-block"></img></Button>  <SubTitle>Pill</SubTitle> 
                        </Col>
                        {/* 
                        // @ts-ignore */}
                        <Col ><Button variant="light" onClick = {this.ointment}><img src = "https://lh3.googleusercontent.com/beXvTdhHOR0a-p-69ZtzJEC5C3VcfTSg8ut4J4h4xuls87NCR6GPOnyuMPaxAQz2Iniey8EDqI5SfJDXx8iFwyx1NqvFG4qA3J7kwF8n-hjCinfgk5Xv_kSI_RzpDxayua6kz48cNyR6Xkna7gYGBk7cVpJDrvFR6f1m-ydX3nXKCNzTLRBg8hYa8fpFBIEsOGPEz8wGYZ5BCXUwlFqhJBpT-tWxWSZLDao3vhtR-3RqWF-hmFb-F-Pdj8NpYz328QV2_Mq7uZSPT4D07n_429pIlSKLpDj769Y7OMx_fu2NU8UMdtWEGuWRFEYTfPU6nnPRakjmFyR1bnPh4Rrb1aqJD8cK0JhVs4dw1qFAc90dRfGFb2dmVqnkzaMxaV_w32SyNMpaoliASpEQSoXhqH7Qu9-tpzcoMfHe0rUMZWyr_70C0sPp7wBxYgdteSKgkoW0y69wLKSjdrAanHOG-vWyJUljO0RM19emmHATBZ_Kau9DImMbSvZjQhhXneetDg9Oq_9tiaemAyDUTYvlwdjUQRFdjvphRbicQrOoa6_YfQHz_9anMbEB29xD5oYi1_PElLumsRpUt20v2XS8yXYEqA8GdtXUpGDjEBhWwEY2Yhzp2pZwHWlRodJqbDPdeg8LcvfRCMZmoR79j_8RmqDTCrS-8rOpYX4sy1_B1foh-M5w9v0gMAo=w250-h200-no"  class = "rounded mx-auto d-block"></img></Button> <SubTitle>Ointment</SubTitle> 
                        </Col>
                    </Row>
                    <Row>
                        {/* 
                        // @ts-ignore */}
                        <Col > <Button variant="light" onClick = {this.syrup}><img src = "https://lh3.googleusercontent.com/1ez6tSUcVdhcZrdTAMUJYNjb-kW0W5cE84zp87gdioL3hplGxNX34PZKQwHOFnQNnCIiWq0ili3EjdKrsEBKyZPYNvBkU1uD5JfjQTXt90nmmGwsnjJ76ERGeVvQJuZp_IAOcQ0QRL-zKj6H3uAzSOxIsqojzwHoTjA42OFueLoji2Lt9AM1SG515HLkBodod4IFmbkXOUFii0_yOW051LALFcthB_ssSVfHGAfhTl7KRX2NMsWW6EbLrSg-k8URfHcUTvVqYo2gAOwyVobSfyr--iN20H-nCOATnEL-hGa1izoPq30CRryJ0K059U-8nR7uGq8j6K7Yl805fSLaCf3Gbh9ROYMt4fyHnPqZ-M1oO2r7hDVv3SNvKcbKTCed_0bYTNTGQmj2WCcaB5eq5RWoUX9D_eqirVx0Sfw5z_MqrlguXtcB3twmiRuQ1Ki_9srcjBhuOyAIZwSQYZZ6-h8UbQQCKF-w5nx81ld4j5L8gAYc5J-Xaqylo2wqH4AC2meue68kKBvihu0Ye76A-fHSggW6diINfsQcptGvThVxWLOYtRrzDXSAUXQPPjG_UTVFuhIYjLrnMV3y22i0DHbaD9g_U0nttzEavCbpccNALJrBZTPz4YqE7z6QbK5IS14MlzSCWfdMlFz3G2oV5WYxEP2Uu-70KFJJjS2qfZ6cFy5PG2D3Xk0=w250-h200-no"  class = "rounded mx-auto d-block"></img></Button>  <SubTitle>Syrup</SubTitle>
                        </Col>
                        {/* 
                        // @ts-ignore */}
                        <Col ><Button variant="light" onClick = {this.spray}><img src = "https://lh3.googleusercontent.com/d_Eu0sGztJ82Dhq8ljI0o-MtyFED9L3Y0qcV5CppPDwBrOPZz0yjeLppV_m4P95NKS4AiVUj_JuAmo8AJZ84wQ838l_DtH7m4kWaIikmve0tljMiQRmS4fGoaEB1lJcCJM3LBDS7VBpLW570jzH1WUqceTGtpFu8zZb_MEhm_mEVnV0GAlXNUUWGrGasu9NExuQZ-_yFvRnwMdRPLqQVEwfxoptGSdHol3t8I5TxMOk4O4N0H4vkVUlkhS3bgk_MdANLR-i1ttxYjutVs2GZp7HNsAfmEa88fiLB775rBFLWeDdgGHABmVQoS1r9aHqvU5RqY4hf6289q1my6B-Nhyc96FKaizbPPrKtngxuFP5FBT2xj1C4PwyetihGYIKr9H5_awlklYgDrfIzI3yVnwm06k5NAq_Qpmw0etJpTLgdrCFBZ1HK0fWOn4XJom_5R1styf8OhqNtEh1LioWmkh3_om9Q7mqFHrc3HnFlD6g2_q-vxoyhgcCLAKRanhEJcnkjgWH04QX7N-ylLTYfzbcDCLPxlfiSKBQagPyLUPp5bxXRoO3fL6Kgr4s2BjwdnJSg_EqtsXhidwV5d1URcGFOuIpuSrjMoHK5ei_v3BfOHifLAqZhtGj86oJUylQWlXcxKkU0h8z3zs7EFf_JYETV_8ZEPzVNmijVM1vY5Fb19jhuraICzwc=w250-h200-no" class = "rounded mx-auto d-block"></img></Button> <SubTitle>Spray</SubTitle> 
                        </Col>
                        {/* 
                        // @ts-ignore */}
                        <Col ><Button variant="light" onClick = {this.action}><img src = "https://lh3.googleusercontent.com/v24YQ0YK7ppOJxM4zbUcxNu8kClzw9_coQAJqSLXFq55Qw6pIz3bCEmbU8NSbZge5ZbM5m9zc3ud85_UcWpN58yMSu4OVaYtcBmKk-yN_jtUMVwDC6wovJCBV_n_0qq1Ykn5aGJp8rVnzhUrDZSOnHs-cv0V81UJ3nDd00rvOqtFCxstaaBNvS-IJOLFBz3Wlr1K1Da6QLXJDlpFbdCR2O2rOMAP6Lwb9vX2lIv0M3Sz4k6IsZRUF0cNic869tHqV81QtzxmKFRZe1DJbsdACfcFxxWXBDKLC3vi6d4RCuzdZJfWVvkANYGbk2AP-Q-XCaC5UnxDY6jkN_gaJ-3BfcGlb8eVaEJW9L_OXahnG4rFwYjFU90YaBBylwSjTJop4VgSL_dBTTELEn_t-No0l_hJ1k8YmD1a6jWKKj-qk_CBH0N_J75Ej1TVfX51rbvco9scrFMCdOOtp3Cgot8m7CucvXkGFxPc44VhU1HFR3ryT9rxLKEsTOZ_UyyPFImK8UC1WHXZ1tM2rklKxKVfPF97TBXv3gzcG9OMyYuJdu5dy7AB99FxxZ7H7izWgMJGrRg5FL4ycOqvshwUzVS21Vh2naMomQcYtz1wo3WrjBsvrHQZ2uUbJBJBKRbn2I3qkT45DpSzqDei8vXOICHiBLHXVZo6cyvPK1vei5OV-FBYde-fRi3EMQM=w250-h200-no"  class = "rounded mx-auto d-block"></img></Button> <SubTitle>All</SubTitle> 
                        </Col>
                    </Row>
                </Container>                

            </div>
           
        )
    }
}

export default DrugDisplay;

