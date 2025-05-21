// src/pages/ThankYouPage.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Header from '../components/Header';
import Footer from '../components/Footer';
import PageTopButton from '../components/PageTopButton';
import DQWindow from '../components/DQWindow'; // DQWindowを再利用

const ThankYouPage = () => {
  return (
    <>
      <Helmet>
        <title>Thank You - SantaHirai Portfolio</title>
      </Helmet>
      <Header />
      <div className="body-inner">
        <div className="thankyou-container" style={{ textAlign: 'center' }}> {/* 元のスタイルを一部適用 */}
            {/* SectionWrapperの代わりに直接スタイルを適用して即時表示 */}
            <div className="section" style={{ opacity: 1, marginTop: '50px' }}> 
                <DQWindow style={{ maxWidth: '600px', marginLeft: 'auto', marginRight: 'auto' }}>
                    <div className="text">
                        <h1 style={{ fontFamily: 'misaki_gothic_2nd', fontSize: '3rem' }}>＊「Thank You!!!」</h1>
                        <p>お問い合わせありがとうございます。<br />内容を確認次第、返信させていただきます。</p>
                        <p style={{ textAlign: 'center', marginTop: '30px' }}>
                            <Link to="/" style={{ color: 'white', textDecoration: 'underline' }}>ホームに戻る</Link>
                        </p>
                    </div>
                </DQWindow>
            </div>
        </div>
        <Footer />
      </div>
      <PageTopButton />
    </>
  );
};

export default ThankYouPage;