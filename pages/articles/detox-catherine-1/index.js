import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Script from 'next/script'
import styles from '../../../styles/DetoxCatherine1.module.css'
import image1 from "../../../public/images/detox-catherine-1/1.jpg"
import image2 from "../../../public/images/detox-catherine-1/2.jpg"
import image3 from "../../../public/images/detox-catherine-1/3.jpg"
import image4 from "../../../public/images/detox-catherine-1/4.jpg"
import image7 from "../../../public/images/detox-catherine-1/7.jpg"
import author from "../../../public/images/detox-catherine-1/author.jpg"
import product1 from "../../../public/images/detox-catherine-1/product1.png"
import product from "../../../public/images/detox-catherine-1/product.png"
import star from "../../../public/images/detox-catherine-1/star.png"
import star1 from "../../../public/images/detox-catherine-1/4.8.png"
const index = () => {
    const CtaLink = 'https://trybandoo.com/products/product-1/'
    var monthsInEng = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var d = new Date(); // today!
    d.setDate(d.getDate() - 3);
    const date = (monthsInEng[d.getMonth()] + " " + d.getDate() + ", " + d.getFullYear());

  return (
    <>
    <Head>
    <title>You never truly know what could be behind aches and pains</title>
    <link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
<link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800&display=swap" rel="stylesheet"></link>
    </Head>

    <div id={styles['smb-page']}>
            <div className={styles['smb-page-main']}>
                <div className={styles['smb-page-left']}>
                    <div className={styles['smb-left-main']}>
                        <p className={styles['advertisement']}>Advertorial</p>
                        <h1>You never truly know what could be behind aches and pains</h1>
                        <div className={styles['smb-autor']}>
                            <Image className={styles['smb-autor-img']} src={author} alt="" />
                            <div className={styles['smb-autor-content']}>
                                <span className={styles['smb-autor-name']}>Andrea Stewart</span>
                                <span className={styles['smb-autor-date']}>{date}</span>
                            </div>
                        </div>
                        <section>
                            <Link href={CtaLink}> <Image className={styles['smb-main-img']} src={image1} alt="" /> </Link>
                            <p>Our bodies have a complicated way of communicating with us. Every little pain, ache, and "strange feeling" you can't describe is a signal your body is sending, telling you about something being wrong. The problem is we're not very good at translating these signals. </p>
<p>That's why we have diagnosticians and doctors – to help us go from "my hip hurts" to "the cause is arthritis, and you can treat it with this." </p>
<p>However, going through the medical system can be very expensive and very slow… </p>
<p>This is exactly what happened to Catherine.</p>

                            <h3>Meet Catherine</h3>
                            <Link href={CtaLink}> <Image className={styles['smb-main-img']} src={image2} alt="" /> </Link>

                            <p>Catherine is 50 years old and works at a nursing home. She calls herself a creature of habit. Partially due to her work, she likes to carefully schedule every part of her day to be the best nurse she can be and have enough time left over to spend with her family after a taxing day at work. </p>
<p>
One morning she woke up with mild pain in her hip. She says, "I really didn't think much of it. It's not uncommon to get some joint aches after a long day at work at my age. I never expected it to get that bad."</p>

<p>After a week, the pain failed to go away. In fact, it got a lot worse. She started having difficulties walking straight, developed a limp, and messed up her schedule. "Things that took me a minute to do could take 5, or worse… The pain started locking up my hip. I came in late for work for the first time in 10 years. I was really proud of my perfect record… That gave me a lot of anxiety. I had difficulty sleeping and decided it was time to see a doctor." </p>

<p>To make a long, very frustrating story short,<strong> Catherine spent a month waiting for doctor's visits, going in and out of the doctors </strong> , while her routine was being completely wrecked. "Honestly, some nights, I just felt like crying. The pain was beyond frustrating. Working was incredibly painful, and I didn't have the energy just to enjoy evenings with my husband. I slept absolutely awful too…"</p>
<h3>The doctors were grasping at straws…</h3>
<p>After all of the tests, nothing conclusive was found. No arthritis, dysplasia… They couldn't figure out what was the reason this healthy 50-year-old woman was in such pain. As a last resort, the doctors recommended seeing a chiropractor to help with mobility and joint movement as a last resort.</p>

<p>Catherine recalls saying, "The physical therapy sessions were really painful. After two, <strong> I talked to the chiropractor, and he said he has seen cases like mine before, and these Detox Foot Patches helped others."</strong> </p>
<p>Despite skepticism, Catherine was at the end of her wits and decided to try them…</p>
                        </section>
                        <section>
<Link href={CtaLink}> <Image className={styles['smb-main-img']} src={image3} alt="" /> </Link>
<h3>Catherine's experience</h3>
<p>"I got home, put on the patches before bed. My husband rolled his eyes when I told him I'm going to try <Link href={CtaLink}>Detox Foot Patches</Link>. The next morning I realized I didn't wake up in my sleep." For Catherine, this was enough to keep wearing these Foot Patches. "I was still in pain, but even my husband was beyond surprised, saying I slept like a baby the whole night." </p>
<p>With her hope rekindled, Catherine wore the Detox Foot Patches nightly for a while. According to her, when she removed them, they were filled up with nasty dark goo the first few times. She wasn't sure what to make of it. "The entire first week, whenever I had to remove the patches, I tried not to look. I was appalled, thinking, "did this really come out of me?" </p>
<Link href={CtaLink}> <Image className={styles['smb-main-img']} src={image4} alt="" /> </Link>
<p><strong>After a little while of using the patches, the pain started to go away slowly. Eventually, it subsided entirely.</strong> "I will never forget the morning when I woke up, started going about my day, noticed I'm on schedule, and that the pain is gone! It really made me appreciate my good health so much more. I even convinced my husband to try the patches!"</p>

                            <h3>About the Detox Foot Patches</h3>
                            <p>The <Link href={CtaLink}>Detox Foot Patches</Link> Catherine used are based on holistic medicine and traditional Asian medicine practices. The region has generations-old traditions that involve practices like acupuncture, detoxication, and the use of natural herbs and extracts to help people. For centuries, this was the only medicine they had access to.</p>
<p><strong>Bandoo Detox Foot Patches borrow from this tradition and contain herbs and extracts sourced from the very mountains of Asia.</strong> The ingredient list simply makes sense: vitamin C which is filled with antioxidants, bamboo vinegar extract – known for improving gut health, loquat leaf extract – a staple in holistic remedy practice. Additionally, Houttunya Cordata – a herb that energizes the body, wood vinegar which is long used for its antibacterial properties. 
</p>
<p>You use this Detox Foot Patch by, as the name implies, placing them on your feet, ideally before going to sleep. <strong>According to Japanese tradition, this placement isn't random – according to Japanese tradition, </strong> the feet hold many acupunctural centers and pores, which excrete about a pint of material per day. </p>
<p>Catherine experienced more than enough effect to make them a mainstay in her bedside table. She has been using the foot patches ever sense, the pain didn't return, and she's a happy advocate of this practice: "If you're a skeptic, I understand, I was like this too. But after trying this for myself, <strong>I turned a new leaf, and if you're experiencing pain no one is helping with, don't suffer. Be open, put your bias aside, and try these patches."</strong></p>
<Link className={`${styles['smb-right-button']} ${styles['btn-small']}`} href={CtaLink}>CHECK AVAILABILITY</Link>
                            <h3>What do others say about Detox Foot Patches</h3>
                            <p>The reviews for these foot patches are glowing. Some people say they didn't feel a difference and got a <strong>100% refund from Bandoo, along with condolences that the patches didn't help. </strong></p>
                            <p>However, the majority tell a different tale.  <strong>For many, the <Link href={CtaLink}>Detox Foot Patches</Link> are an essential part of their routine, like a morning cup of coffee or daily skincare routine. </strong></p>
                            <p>There's no surprise there – chemicals, pollutants, microplastics constantly haunt people… The average estimate says that the average person is exposed to hundreds of toxic materials every day. <strong>So introducing a holistic solution based on practices coming from a simpler time, only using natural, safe ingredients can be a great idea. </strong></p>
                            <p>The ingredients in the Detox Foot Patches are filled with herbs long known for their beneficial qualities, used by generations, and still in use today. If your body is working overtime, constantly working to filter through residue, metabolic waste, toxins, etc., there's no surprise if you start experiencing fatigue, pains, and struggle to sleep. 
</p>
                            <p><Image className={`${styles['smb-main-img']} ${styles['smb-center-img']}`} src={star} alt=""/></p>
                            <p>
                                <em>
                                    "Used for the 1st time last night, best nights sleep in a long time. Can only put it down to the cleanser foot pads.
 "
                                </em>
                            </p>
                            <p className={styles['smb-text-center']}>
                                <em><strong>Joan M. </strong></em>
                            </p>
                            <p><Image className={`${styles['smb-main-img']} ${styles['smb-center-img']}`} src={star} alt=""/></p>
                            <p>
                                <em>
                                    "My first order came yesterday and I tried using it immediately and it works like magic, I was able to walk straight without using a knee cup. Today, I ordered again another 4 boxes. I will share this with my friends who have the same issues. Thank you again and God bless
"
                                </em>
                            </p>
                            <p className={styles['smb-text-center']}>
                                <em><strong>Normelita M.</strong></em>
                            </p>
                            <p><Image className={`${styles['smb-main-img']} ${styles['smb-center-img']}`} src={star} alt=""/></p>
                            <p>
                                <em>
                                    "I am one happy and repeat customer and love the patches. They really help, especially with my feet, after each use it's like the circulation increases. I am not a diabetic but have neuropathy on the bottoms of my feet and the patches help me so much, I am also a Tae Kwon Do instructor for over 45 years and even makes tired feet feel SOOO good. Thanks again
"
                                </em>
                            </p>
                            <p className={styles['smb-text-center']}>
                                <em><strong>Jim J.</strong></em>
                            </p>
                        </section>
                        <section>
                            <p>If you feel like something in Catherine's story resonated with you – this might be the thing to try. You never know where pains, poor sleep quality, and similar ailments come from. For many, these Foot Patches felt like a blessing. Slowing down introducing a natural product into your self-care routine is definitely something you won't regret. </p>
                            
<div className={styles['orange_box']}><strong>[SALE ALERT]:</strong> You can access the  <strong>early Black Friday Presale and save 70%</strong> by clicking <Link href={CtaLink}>this exclusive link below</Link>. Stock is currently reduced in INDIA , so if you want to <strong>try Bandoo Detox Foot Patches now with 70% discount</strong>, it pays to be quick!</div>

 <Link href={CtaLink}> <Image className={`${styles['smb-main-img']} ${styles['small-img']}`} src={product1} alt="" /> </Link>
<Link className={`${styles['smb-right-button']} ${styles['btn-small']}`}  href={CtaLink}>APPLY 70% DISCOUNT</Link>
                        </section>
                    </div>
                </div>
                <div className={styles['smb-page-right']}>
                    <Image className={styles['smb-main-img']} src={image7} alt=""/>
                    <div className={styles['smb-link']}></div>
                    <center>
                        <Image src={star1} alt=""/>
                    </center>
                    <p>
                        <em className={styles.em}>
                            Found that these are working! I'm using these for CIRS and mold toxicity since my body cannot detox well internally. I seem to lack the genes to do so. So I have to rely on external detoxification methods. Currently, I can only use these for a few hours at a time <strong>and I will feel so relieved due to toxins coming out of my body.</strong> It's a fantastic feeling! Highly recommended!
                        </em>
                    </p>
                    <p><strong>Jason</strong></p>
                    <p><strong>Reno, NV </strong></p>
                    <div className={styles['smb-link']}></div>
                    <center>
                        <Image src={star1} alt="" />
                    </center>
                    <p>
                        <em className={styles.em}>
                            Well, I put these foot pads on my feet before bed and I was kinda skeptical. My back was sore and stiff when I went to bed. When I got up in the morning I took the foot pads off and they looked disgusting, which I think means that they worked. <strong>My back pain was reduced and I felt little pain after my usual morning stretch. It's almost a miracle. I feel so refreshed every morning these days.</strong> So I'd say that they work!
                        </em>
                    </p>
                    <p><strong>Brian Smith</strong></p>
                    <p><strong>Houston, TX</strong></p>
                    <div className={styles['smb-link']}></div>
                    <div id="smb-fixed-flag"></div>
                    <div className={`${styles['smb-right-main']} ${styles['smb-fixed']}`}>
                        <Image className={styles['smb-main-img']} src={product} alt="" />
                        <h2><Link href={CtaLink}>Detox Foot Patch </Link></h2>
	<p>Get Yours!</p>
                        <Link className={`${styles['smb-right-button']} ${styles['btn-small']}`} href={CtaLink}>CHECK AVAILABILITY →</Link>
                    </div>
                </div>
            </div>
            <div id="smb-flag-none"></div>
            <div className={`stickybtn ${styles['smb-button-bottom']} ${styles['smb-mb-block']}`}>
                <Link className={styles['smb-right-button']} href={CtaLink}> CHECK AVAILABILITY → </Link>
            </div>
        </div>
  <section className={styles['section-4']}>
            <div className={styles['container']}>
                <div className={`${styles['w_content_4']} ${styles['footer']}`}>
                    <div className={styles['wy-inner']}>
                       <p> <Link href="https://trybandoo.com/terms/">TERMS AND CONDITIONS</Link> <Link href="https://trybandoo.com/privacy/">PRIVACY POLICY</Link> <Link href="https://trybandoo.com/privacy/">COOKIE POLICY</Link> <Link href="https://trybandoo.com/contact/">CONTACT US</Link> </p>
<br/>
COPYRIGHT, Bandoo
<br/><br/>
THIS IS AN ADVERTISEMENT AND NOT AN ACTUAL NEWS ARTICLE, BLOG, OR CONSUMER PROTECTION UPDATE
<br/><br/>
DISCLAIMER: Results may vary from person to person. Bandoo does not intend to diagnose, treat, cure or prevent any disease and does not constitute medical advice.
<br/><br/>
MARKETING DISCLOSURE: This website is a market place. As such you should know that the owner has a monetary connection to the product and services advertised on the site. The owner receives payment whenever a qualified lead is referred but that is the extent of it.
<br/><br/>
ADVERTISING DISCLOSURE: This website and the products &amp; services referred to on the site are advertising marketplaces. This website is an advertisement and not a news publication. Any photographs of persons used on this site are models. The owner of this site and of the products and services referred to on this site only provides a service where consumers can obtain and compare.
                        <p></p>
                    </div>
                </div>
            </div>
        </section>
    <Script jsx src="https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js" strategy="beforeInteractive" type="text/javascript"></Script>
	<Script jsx>
        {`
      $(window).scroll(function() {    
        var scroll = $(window).scrollTop();
    var dheight = $(document).height();
         //>=, not <=
         if (scroll >= dheight/2) {
    $(".stickybtn").addClass("stickybtn_fixed");
            } else {
    $(".stickybtn").removeClass("stickybtn_fixed");
            }
        
    }); //missing );
`}
</Script>
    </>
  )
}

export default index