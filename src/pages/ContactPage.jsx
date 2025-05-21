// src/pages/ContactPage.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Header from '../components/Header';
import Footer from '../components/Footer';
import PageTopButton from '../components/PageTopButton';
import SectionWrapper from '../components/SectionWrapper'; // アニメーションのため
import DQWindow from '../components/DQWindow';

const ContactPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('送信中...');

    const formData = new FormData();
    formData.append('entry.2005620554', name); // Google Formのname属性に合わせる
    formData.append('entry.1045781291', email);
    formData.append('entry.839337160', message);

    try {
      await fetch("https://docs.google.com/forms/u/0/d/e/1FAIpQLSeWsSk3l4xdD31gB7bOfcXLfqLpT3tzg-SxymVRiUq9ffNZVQ/formResponse", {
        method: "POST",
        mode: "no-cors", // 重要: Google Formsへの送信では通常これが必要
        body: formData
      });
      navigate("/thankyou");
    } catch (error) {
      console.error("Form submission error:", error);
      setStatus("送信に失敗しました。再度お試しください。");
    }
  };

  return (
    <>
      <Helmet>
        <title>Contact - SantaHirai Portfolio</title>
      </Helmet>
      <Header />
      <div className="body-inner">
        <SectionWrapper style={{ opacity: 1, animation: 'none', marginTop: '50px' }}> {/* このセクションはすぐに表示 */}
          <DQWindow>
            <div className="text">
              <div className="caption">
                <h1>＊ Contact Form</h1>
                <p style={{ margin: 'auto 0' }}>問い合わせフォーム</p>
              </div>
              <p>下記フォームに必要事項をご記入の上、送信ボタンをクリックしてください。</p>
              
              <div className="contact-form-container">
                <form id="contactForm" className="contact-form" onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label htmlFor="name">Name <span className="required">*</span></label>
                    <input 
                      type="text" 
                      id="name" 
                      name="entry.2005620554" /* Google Form用 */
                      placeholder=" 例）山田太郎" 
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required 
                    />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="email">Mail Address <span className="required">*</span></label>
                    <input 
                      type="email" 
                      id="email" 
                      name="entry.1045781291" /* Google Form用 */
                      placeholder=" 例）example@mail.com" 
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required 
                    />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="message">Contents <span className="required">*</span></label>
                    <textarea 
                      id="message" 
                      name="entry.839337160" /* Google Form用 */
                      rows="8" 
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      required
                    ></textarea>
                  </div>
                  
                  <div className="form-submit">
                    <button type="submit" className="submit-btn">送信する</button>
                  </div>
                </form>
                {status && <div id="formStatus" className="form-status" style={{marginTop: '15px', textAlign: 'center'}}>{status}</div>}
              </div>
            </div>
          </DQWindow>
        </SectionWrapper>
        <Footer />
      </div>
      <PageTopButton />
    </>
  );
};

export default ContactPage;