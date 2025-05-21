// src/pages/HomePage.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Header from '../components/Header';
import Footer from '../components/Footer';
import PageTopButton from '../components/PageTopButton';
import SectionWrapper from '../components/SectionWrapper';
import DQWindow from '../components/DQWindow';
import DQWindowSimple from '../components/DQWindowSimple';
import SkillChart from '../components/SkillChart';

import myIconImg from '../assets/img/icon.png';
import researchImg from '../assets/img/research.png';

const HomePage = () => {
  return (
    <>
      <Helmet>
        <title>SantaHirai Portfolio</title>
        <meta name="description" content="Santa Hiraiのポートフォリオサイトです。制作物やスキルを紹介しています。" />
      </Helmet>
      <Header />
      <div className="body-inner">
        <a href="https://github.com/santahirai" target="_blank" rel="noopener noreferrer">
          <img id="my-icon" src={myIconImg} alt="myicon" />
        </a>

        <DQWindowSimple outerStyle={{ marginLeft: 'auto', marginRight: 'auto' }}>
          <h1>＊「Welcome to my Portfolio!」</h1>
        </DQWindowSimple>

        <SectionWrapper>
          <DQWindow>
            <div className="text">
              <div className="caption">
                <h1>＊ About This Page</h1>
                <p style={{ margin: 'auto 0' }}>このページについて</p>
              </div>
              <p>ここはSantaHiraiのポートフォリオサイトです。これまでに手がけた制作物、身に着けたスキルをまとめています。私のことをもっと深く知ってほしいと思って作りました。</p>
            </div>
          </DQWindow>
        </SectionWrapper>

        <SectionWrapper>
          <DQWindow>
            <div className="text">
              <div className="caption">
                <h1>＊ About Me</h1>
                <p style={{ margin: 'auto 0' }}>私について</p>
              </div>
              <p>　システムエンジニアになるために勉強中の高専生です。高専で5年間電気工学と情報工学を学んだ後、現在高専の専攻科で他分野についても幅広く学んでいます。所属する研究室は国際色豊かで留学生と接する機会も多く、日常的に英語でのコミュニケーションをしており、ボードゲームなどを使って交流しています。チーム内でのコミュニケーションを大切にし、互いに学び合いながら成長していくことを心がけています。将来的には、社会に貢献できるエンジニアとして働くことが目標です。</p>
              <p>- GitHub : <a href="https://github.com/santahirai" target="_blank" rel="noopener noreferrer">https://github.com/santahirai</a></p>
              <p>- Qiita : <a href="https://qiita.com/SantaHirai" target="_blank" rel="noopener noreferrer">https://qiita.com/SantaHirai</a></p>

              <h2 style={{ paddingLeft: '1em' }}>＊ Interest</h2>
              <ul>
                <li>ラーメン</li>
                <li>車</li>
                <li>バイク</li>
                <li>旅行</li>
                <li>キャンプ</li>
              </ul>
            </div>
          </DQWindow>
        </SectionWrapper>

        <SectionWrapper>
          <DQWindow>
            <div className="text">
              <div className="caption">
                <h1>＊ Research</h1>
                <p style={{ margin: 'auto 0' }}>研究</p>
              </div>
              <img src={researchImg} alt="research" className="image" />
              <p>　多くの情報や口コミから類似の観光地を探すのは大変です。高専本科の研究では、自然言語処理を用いて口コミを分析し、観光地の類似度を数値化するシステムを開発しました。具体的には、レビューから「滝」や「スキー」等の観光地の特徴を表す単語をTF-IDFで抽出し、Word2Vecの学習済みモデルで単語をベクトル化。その単語ベクトル間の近さ(コサイン類似度)で類似度を計算したのちに、その値を使って観光地間の類似度を算出します。結果、スキー場同士や公園同士など同種の場所で高い類似度が算出できました。この研究は、観光サイトの推薦機能等への応用が期待できると考えています。</p>
            </div>
          </DQWindow>
        </SectionWrapper>

        <SectionWrapper>
          <DQWindow>
            <div className="text">
              <div className="caption">
                <h1>＊ Skills</h1>
                <p style={{ margin: 'auto 0' }}>スキル</p>
              </div>
              <SkillChart />
              <h3 style={{ marginLeft: '1em' }}>＊ Skill Level</h3>
              <p>
                0 : できない<br />
                1 : 学校の授業で触れた<br />
                2 : 趣味で学習した<br />
                3 : 参考書などをもとに自分で実装できる<br />
                4 : サービス開発・製品化をした
              </p>
              <h2 style={{ marginLeft: '1em' }}>＊ Other Skills</h2>
              <ul>
                <li>TOEIC : 670 (2024-09)</li>
                <li>技術英語能力検定 : 2級 (2022-07)</li>
                <li>アマチュア無線技士 : 3級 (2022-03)</li>
              </ul>
            </div>
          </DQWindow>
        </SectionWrapper>

        <SectionWrapper>
          <DQWindow>
            <div className="text">
              <div className="caption">
                <h1>＊ Contact</h1>
                <p style={{ margin: 'auto 0' }}>問い合わせ</p>
              </div>
              <div className="btn-container">
                <Link to="/contact" className="btn">問い合わせフォーム</Link>
              </div>
              <p>このページに関するご意見・ご感想、またはお仕事の依頼などがありましたら、上記のフォームからお問い合わせください。</p>
            </div>
          </DQWindow>
        </SectionWrapper>

        <SectionWrapper style={{ opacity: 1 }}> {/* 初期状態で表示するため style を調整 */}
          <div className="centering">
            <p></p>
            <h1>Thank you for coming!</h1>
          </div>
        </SectionWrapper>
        <Footer />
      </div>
      <PageTopButton />
    </>
  );
};

export default HomePage;