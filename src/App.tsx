import React, { useState } from 'react';
import { Waves, Send, CheckCircle2, ArrowRight, BookOpen, Users, Target, Briefcase, Award, TrendingUp } from 'lucide-react';

function App() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', { name, email });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-400 via-teal-400 to-blue-500">
      {/* Hero Section */}
      <header className="container mx-auto px-4 py-20 text-white text-center">
        <Waves className="w-16 h-16 mx-auto mb-8" />
        <h1 className="text-5xl font-bold mb-6">フリーランスとして成功する最短ルート</h1>
        <p className="text-xl mb-8">会社員からフリーランスへの一歩を、共に歩みましょう</p>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4">
        {/* Introduction */}
        <section className="bg-white/90 backdrop-blur-sm rounded-lg p-8 mb-12">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">フリーランスを目指すあなたへ</h2>
          <p className="text-gray-700 mb-6">
            会社員を辞めてフリーランスとして独立したいと考えているものの、
            「どうやってスタートすればいいの？」「収入は安定するの？」と
            不安を感じている方は多いのではないでしょうか。
          </p>
          <img 
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200"
            alt="フリーランスチーム"
            className="w-full rounded-lg mb-8"
          />
          <p className="text-gray-700 mb-6">
            フリーランスという働き方は、自由な時間管理と高い収入の可能性を秘めています。
            しかし、その一方で、安定した収入の確保や、仕事の獲得、スキルの向上など、
            さまざまな課題に直面することも事実です。
          </p>
        </section>

        {/* Success Stories */}
        <section className="bg-white/90 backdrop-blur-sm rounded-lg p-8 mb-12">
          <h2 className="text-3xl font-bold mb-8 text-gray-800">成功事例</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <img 
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=800"
                alt="フリーランスエンジニア"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-bold mb-2">Aさん（32歳・エンジニア）</h3>
              <p className="text-gray-600">
                「独立して1年で月収100万円を達成。このメンバーシップで学んだ営業手法と
                価格交渉のテクニックが、大きな転機となりました。」
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <img 
                src="https://images.unsplash.com/photo-1573497620053-ea5300f94f21?auto=format&fit=crop&w=800"
                alt="フリーランスデザイナー"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-bold mb-2">Bさん（28歳・デザイナー）</h3>
              <p className="text-gray-600">
                「副業からスタートして、半年後に独立を実現。今では海外クライアントとも
                取引があり、想像以上の成果を上げています。」
              </p>
            </div>
          </div>
        </section>

        {/* Detailed Guide */}
        <section className="bg-white/90 backdrop-blur-sm rounded-lg p-8 mb-12">
          <h2 className="text-3xl font-bold mb-8 text-gray-800">フリーランス成功への道のり</h2>
          <div className="space-y-12">
            <div>
              <h3 className="text-2xl font-bold mb-4 flex items-center">
                <BookOpen className="w-8 h-8 text-emerald-500 mr-2" />
                1. 準備段階
              </h3>
              <img 
                src="https://images.unsplash.com/photo-1434626881859-194d67b2b86f?auto=format&fit=crop&w=1200"
                alt="準備段階"
                className="w-full rounded-lg mb-4"
              />
              <p className="text-gray-700 mb-4">
                フリーランスとして成功するためには、綿密な準備が必要不可欠です。
                まずは以下の点について、しっかりと計画を立てましょう。
              </p>
              <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                <li>市場調査と競合分析</li>
                <li>必要なスキルの棚卸しと習得計画</li>
                <li>資金計画（最低6ヶ月分の生活費を確保）</li>
                <li>健康保険・年金の切り替え準備</li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-4 flex items-center">
                <Target className="w-8 h-8 text-emerald-500 mr-2" />
                2. スキルアップ戦略
              </h3>
              <img 
                src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200"
                alt="スキルアップ"
                className="w-full rounded-lg mb-4"
              />
              <p className="text-gray-700 mb-4">
                フリーランスとして高単価を実現するためには、継続的なスキルアップが重要です。
                以下の方法で、効率的にスキルを向上させましょう。
              </p>
              <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                <li>オンライン学習プラットフォームの活用</li>
                <li>実践的なプロジェクトへの参加</li>
                <li>業界カンファレンスやセミナーへの参加</li>
                <li>メンターからの指導を受ける</li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-4 flex items-center">
                <Briefcase className="w-8 h-8 text-emerald-500 mr-2" />
                3. 営業戦略
              </h3>
              <img 
                src="https://images.unsplash.com/photo-1552581234-26160f608093?auto=format&fit=crop&w=1200"
                alt="営業戦略"
                className="w-full rounded-lg mb-4"
              />
              <p className="text-gray-700 mb-4">
                安定した案件獲得のために、効果的な営業戦略を立てることが重要です。
                私たちのメンバーシップでは、以下のような具体的な方法を詳しく解説しています。
              </p>
              <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                <li>ポートフォリオの作成と活用方法</li>
                <li>SNSを活用した見込み客の獲得</li>
                <li>クライアントとの効果的なコミュニケーション方法</li>
                <li>リピーター獲得のための施策</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="bg-white/90 backdrop-blur-sm rounded-lg p-8 mb-12">
          <h2 className="text-3xl font-bold mb-8 text-gray-800">メンバーシップ特典</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Send className="w-8 h-8 text-emerald-500" />,
                title: "実践的なノウハウ",
                description: "現役フリーランスから学ぶ実践的な成功ノウハウ"
              },
              {
                icon: <CheckCircle2 className="w-8 h-8 text-emerald-500" />,
                title: "サポート体制",
                description: "専門家による個別相談とコミュニティサポート"
              },
              {
                icon: <ArrowRight className="w-8 h-8 text-emerald-500" />,
                title: "最新情報",
                description: "業界の最新トレンドと案件情報をお届け"
              }
            ].map((benefit, index) => (
              <div key={index} className="text-center p-6 rounded-lg bg-white shadow-lg">
                <div className="flex justify-center mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Testimonials */}
        <section className="bg-white/90 backdrop-blur-sm rounded-lg p-8 mb-12">
          <h2 className="text-3xl font-bold mb-8 text-gray-800">受講者の声</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400",
                name: "田中さん（34歳）",
                role: "Webデザイナー",
                text: "独立して3ヶ月で月収50万円を達成できました。具体的なノウハウと実践的なアドバイスが本当に役立ちました。"
              },
              {
                image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=400",
                name: "佐藤さん（29歳）",
                role: "コピーライター",
                text: "副業から始めて、今では完全フリーランス。このコミュニティのおかげで、不安なく独立できました。"
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6">
                <div className="flex items-center mb-4">
                  <img 
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h3 className="font-bold">{testimonial.name}</h3>
                    <p className="text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-700">{testimonial.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Pricing */}
        <section className="bg-white/90 backdrop-blur-sm rounded-lg p-8 mb-12">
          <h2 className="text-3xl font-bold mb-8 text-gray-800">料金プラン</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "ビギナープラン",
                price: "月額9,800円",
                features: [
                  "基本的なノウハウ動画",
                  "月1回のグループコンサル",
                  "コミュニティ参加",
                  "教材アクセス権"
                ]
              },
              {
                name: "スタンダードプラン",
                price: "月額19,800円",
                features: [
                  "すべての動画コンテンツ",
                  "月2回のグループコンサル",
                  "コミュニティ参加",
                  "教材アクセス権",
                  "案件紹介サービス"
                ]
              },
              {
                name: "プレミアムプラン",
                price: "月額39,800円",
                features: [
                  "すべての動画コンテンツ",
                  "月4回の個別コンサル",
                  "VIPコミュニティ参加",
                  "教材アクセス権",
                  "優先案件紹介",
                  "営業ツール提供"
                ]
              }
            ].map((plan, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                <p className="text-2xl font-bold text-emerald-500 mb-4">{plan.price}</p>
                <ul className="space-y-2">
                  {plan.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-center">
                      <CheckCircle2 className="w-5 h-5 text-emerald-500 mr-2" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-white/90 backdrop-blur-sm rounded-lg p-8 mb-12">
          <h2 className="text-3xl font-bold mb-8 text-gray-800">よくある質問</h2>
          <div className="space-y-6">
            {[
              {
                q: "未経験でも始められますか？",
                a: "はい、基礎から丁寧に指導いたしますので、未経験の方でも安心してスタートできます。"
              },
              {
                q: "仕事と両立できますか？",
                a: "すべてのコンテンツはオンデマンドで視聴可能です。また、コンサルティングも平日夜や休日に設定できます。"
              },
              {
                q: "途中解約は可能ですか？",
                a: "はい、いつでも解約可能です。違約金等は一切発生しません。"
              }
            ].map((faq, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-lg font-bold mb-2">Q. {faq.q}</h3>
                <p className="text-gray-700">A. {faq.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Form */}
        <section className="bg-white/90 backdrop-blur-sm rounded-lg p-8 mb-12">
          <h2 className="text-3xl font-bold mb-8 text-gray-800">無料相談を予約する</h2>
          <form onSubmit={handleSubmit} className="max-w-2xl mx-auto">
            <div className="mb-6">
              <label htmlFor="name" className="block text-gray-700 mb-2">お名前</label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                required
              />
            </div>
            <div className="mb-6">
              <label htmlFor="email" className="block text-gray-700 mb-2">メールアドレス</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-emerald-500 text-white py-3 px-6 rounded-lg font-bold hover:bg-emerald-600 transition-colors"
            >
              無料相談を予約する
            </button>
          </form>
        </section>

        {/* LINE Button */}
        <section className="text-center mb-12">
          <a
            href="#"
            className="inline-block bg-[#06C755] text-white py-4 px-8 rounded-lg font-bold hover:bg-[#05b54c] transition-colors"
          >
            LINE公式アカウントに登録する
          </a>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2025 フリーランスメンバーシップ. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;