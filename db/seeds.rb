[User, Product].map(&:destroy_all)

user1 = User.create(username: "john123", password: "123456", image_url: "https://res.cloudinary.com/dbyoymbpd/image/upload/c_scale,w_111/v1500508764/pexels-photo-513516_n4tcxi.jpg")
user2 = User.create(username: "elvispresley", password: "theking", image_url: "https://res.cloudinary.com/dbyoymbpd/image/upload/c_scale,w_97/v1500508597/pexels-photo-270968_bq0jbe.jpg")
user3 = User.create(username: "genghiskhan", password: "mongol", image_url: "https://res.cloudinary.com/dbyoymbpd/image/upload/c_scale,w_111/v1500509289/list-genghis-khan-2-E_t6x4cr.jpg")
user4 = User.create(username: "abelincoln", password: "emancipate", image_url: "https://res.cloudinary.com/dbyoymbpd/image/upload/c_scale,w_111/v1500509040/last_drxfvh.jpg")
user5 = User.create(username: "inkymaze", password: "cheeseburger", image_url: "https://res.cloudinary.com/dbyoymbpd/image/upload/c_scale,w_111/v1500508849/220px-Vladimir_Nabokov_1960s_ql67rv.jpg")
user6 = User.create(username: "alexander", password: "thegreat", image_url: "https://res.cloudinary.com/dbyoymbpd/image/upload/c_scale,w_111/v1500508899/alexander_athens2_v2n7hg.jpg")
demo = User.create(username: "maggie", password: "secretpw", image_url: "https://res.cloudinary.com/dbyoymbpd/image/upload/c_scale,w_111/v1500508952/o-MAGGIE-GYLLENHAAL-facebook_kzxhgg.jpg")


prod1 = Product.create!(name:"Blockstack Browser" ,description:"A gateway to a new, decentralized internet", image_url:"https://res.cloudinary.com/dbyoymbpd/image/upload/c_scale,w_111/v1500517873/blockstack_lhi31t.jpg",product_URL:"https://blockstack.org", hunter_id: user1.id, image_two_url:"https://res.cloudinary.com/dbyoymbpd/image/upload/v1509551456/9eca8829-a950-4ad9-a4e7-0e9a718e8d77_ogk38x.jpg",
image_three_url:"http://res.cloudinary.com/dbyoymbpd/image/upload/v1509551406/d170a076-7fe3-4050-a563-b1a1990d4b55_jslddu.jpg",image_four_url:"https://res.cloudinary.com/dbyoymbpd/image/upload/v1509551305/f97aae3d-78c5-4e7d-9bee-517ef019e31b_as3pxt.jpg",image_five_url:"https://res.cloudinary.com/dbyoymbpd/image/upload/v1509551269/a6026df9-e2f4-40f7-83ab-0c321a4ebdcf_kofcsr.png")
prod2 = Product.create!(name:"21 Lists" ,description:"Send and receive targeted, paid microtasks", image_url:"https://res.cloudinary.com/dbyoymbpd/image/upload/c_scale,w_111/v1500517968/21co_naxxjg.jpg",product_URL:"https://21.co", hunter_id: user2.id,
image_two_url:"https://res.cloudinary.com/dbyoymbpd/image/upload/v1509551524/bba3f694-47a4-4fee-86b5-72a269310ab4_gfcrez.png",
image_three_url:"https://res.cloudinary.com/dbyoymbpd/image/upload/v1509551531/aa5995b9-b88d-46bd-8dc2-da543bfee0e3_q01qo3.png",
image_four_url:"https://res.cloudinary.com/dbyoymbpd/image/upload/v1509551535/1dd9adcf-c346-43ec-9e6f-1238a4b1a3ba_eabsqg.png")
prod3 = Product.create!(name:"Better" ,description:"Health insurance claims made simple", image_url:"https://res.cloudinary.com/dbyoymbpd/image/upload/v1509551856/f91f7f2c-d3c9-4158-94e5-e47c8ed06105_umta1w.jpg",product_URL:"https://www.getbetter.co", hunter_id: user2.id,
image_two_url:"https://res.cloudinary.com/dbyoymbpd/image/upload/v1509551871/5d8ba5b8-73bd-4b63-8ed2-c3d7590a6f38_sbh4dj.jpg",
image_three_url:"https://res.cloudinary.com/dbyoymbpd/image/upload/v1509551879/cc1bd67e-6526-4afb-b193-690943240eaa_hvsgwg.jpg",
image_four_url:"https://res.cloudinary.com/dbyoymbpd/image/upload/v1509551886/e023e209-ea9b-4589-a87e-d3c39e638890_n2waya.png",
image_five_url:"https://res.cloudinary.com/dbyoymbpd/image/upload/v1509551898/b12708de-0b1f-4af8-8962-7f5d1b2b3ca5_y036du.jpg")
prod4 = Product.create!(name:"Simple Habit" ,description:"Modern mindfulness for your busy life", image_url:"https://res.cloudinary.com/dbyoymbpd/image/upload/c_scale,w_111/v1500510317/175x175bb_qbmjld.jpg",product_URL:"www.simplehabit.com/", hunter_id: user3.id,
image_two_url:"https://res.cloudinary.com/dbyoymbpd/image/upload/v1509552242/f4251fe0-ea40-469d-a51b-edd3de7c7f9c_ytdne2.png",
image_three_url:"https://res.cloudinary.com/dbyoymbpd/image/upload/v1509552247/dcbfbbaf-5932-44e3-87aa-151ff15804ea_sxaef8.png",
image_four_url:"https://res.cloudinary.com/dbyoymbpd/image/upload/v1509552252/fafafd7a-a707-46c3-a36c-2bc925a8db54_xgqjdu.png",
image_five_url:"https://res.cloudinary.com/dbyoymbpd/image/upload/v1509552256/3ed15357-8326-4e9c-8094-2fcc6dc5918e_o4zpds.png")
prod5 = Product.create!(name:"Assembly" ,description:"All your influencer marketing campaigns under one roof", image_url:"https://res.cloudinary.com/dbyoymbpd/image/upload/c_scale,w_111/v1500512041/bc729c9b-6d5b-4cce-a4cd-b2ba18bbc07d_2_vlowt0.gif",product_URL:"https://useassembly.com", hunter_id: user4.id, image_two_url:"https://res.cloudinary.com/dbyoymbpd/image/upload/v1511635087/83e0df98-fce7-4e7d-8455-642f2fee7574_g1ra70.png",
image_three_url:"https://res.cloudinary.com/dbyoymbpd/image/upload/v1511635104/0869eeaf-46dd-4f20-98b5-0a20f442748b_tusd6d.png",
image_four_url:"https://res.cloudinary.com/dbyoymbpd/image/upload/v1511635111/31be49fd-11aa-4883-947d-cfe30ed15d7b_he5rr5.png",
image_five_url:"http://res.cloudinary.com/dbyoymbpd/image/upload/v1511635118/f858a40a-6402-4d15-a471-a3c18c73e93a_btns8q.png")
prod6 = Product.create!(name:"Wordmark.it" ,description:"Helps you choose fonts", image_url:"https://res.cloudinary.com/dbyoymbpd/image/upload/c_scale,w_111/v1500512159/wordmap_jsoffs.jpg",product_URL:"https://wordmark.it", hunter_id: user1.id,
image_two_url:"https://res.cloudinary.com/dbyoymbpd/image/upload/v1511635501/0f0ead9a-19b0-42b1-adb5-9eaa135550cd_xixtl7.gif",
image_three_url:"https://res.cloudinary.com/dbyoymbpd/image/upload/v1511635504/c3037e9e-e903-4ab4-a830-26eead5b8ab8_ptpxag.png")
prod7 = Product.create!(name:"Actively" ,description:"All of your favorite fitness studios in one app", image_url:"https://res.cloudinary.com/dbyoymbpd/image/upload/c_scale,w_111/v1500512311/actively_cd7420.jpg",product_URL:"https://actively.ai", hunter_id: user2.id,
image_two_url:"https://res.cloudinary.com/dbyoymbpd/image/upload/v1511635528/bbbca39b-bb32-4c70-922d-3c328afb4e68_y445b1.jpg",
image_three_url:"https://res.cloudinary.com/dbyoymbpd/image/upload/v1511635534/baa5277e-bb98-450b-bf84-523202960931_zk0iou.jpg",
image_four_url:"https://res.cloudinary.com/dbyoymbpd/image/upload/v1511635538/9b4da969-3127-40f1-aa3f-c981bbeb584e_ctxn5s.jpg",
image_five_url:"https://res.cloudinary.com/dbyoymbpd/image/upload/v1511635544/4db42eee-6034-45e8-9a4a-4b66c9163a3e_sa22gv.jpg")
prod8 = Product.create!(name:"Token Data" ,description:"Database with 300 ICO's and token returns", image_url:"https://res.cloudinary.com/dbyoymbpd/image/upload/c_scale,w_111/v1500517666/tokendata_rqmmej.gif",product_URL:"https://www.tokendata.io", hunter_id: user5.id,
image_two_url:"https://res.cloudinary.com/dbyoymbpd/image/upload/v1511635563/9e9373e5-93dd-4147-95c2-6c7db851d17e_qxondt.png",
image_three_url:"https://res.cloudinary.com/dbyoymbpd/image/upload/v1511635567/317c2efa-09a4-4c52-8fa9-1abba8215e64_jzhiaq.png",
image_four_url:"http://res.cloudinary.com/dbyoymbpd/image/upload/v1511635580/b0f1c379-a4b6-41f1-a690-85775541ec6f_bkcqco.png",
image_five_url:"http://res.cloudinary.com/dbyoymbpd/image/upload/v1511635592/a8788a1a-0161-424e-9513-46129b40546c_kuuapb.png")
prod10 = Product.create!(name: "Karmabot 2.0" ,description:"Streamline your business on Slack", image_url:"https://res.cloudinary.com/dbyoymbpd/image/upload/c_scale,w_111/v1501281351/c3394f7a-614e-4713-8996-eea3358dfbbf_zsnvki.png",product_URL:"http://karmabot.chat/", hunter_id: user5.id,
image_two_url:"https://res.cloudinary.com/dbyoymbpd/image/upload/v1501281345/a079dbcd-387a-4f5d-94fd-496d6a84075e_jlqsxn.png", image_three_url:"https://res.cloudinary.com/dbyoymbpd/image/upload/v1501281339/be73e447-be6d-4adb-9c44-2173ac2c3c6a_eswsag.png",
image_four_url:"https://res.cloudinary.com/dbyoymbpd/image/upload/v1501281333/5f3f03e4-72ea-49fc-88a2-6705dbf22825_bumwdw.png",
image_five_url:"https://res.cloudinary.com/dbyoymbpd/image/upload/v1501281326/f0761d9a-7189-4185-b4cc-7a7706896f5b_rwgggj.png" )
prod11 = Product.create!(name: "Roadmap 2.0" ,description:"Product management tools for innovative teams",hunter_id: user2.id, image_url:"https://res.cloudinary.com/dbyoymbpd/image/upload/c_scale,w_111/v1501281600/7ba4a441-a57f-44d7-8bd0-3b9e2cf556ea_pw1sb4.gif",product_URL:"https://roadmap.space",
image_two_url:"https://res.cloudinary.com/dbyoymbpd/image/upload/v1511636107/49b2c513-bb92-446c-87f8-5b97ee3304d7_fdepf0.png",
image_three_url:"https://res.cloudinary.com/dbyoymbpd/image/upload/v1511636111/9bb35054-03f9-4abc-8c66-37eeedf9befe_rdbzld.png",
image_four_url:"https://res.cloudinary.com/dbyoymbpd/image/upload/v1511636114/b28f61e7-e4fe-498e-a8ef-387ee5632b01_kq1eng.png",
image_five_url:"https://res.cloudinary.com/dbyoymbpd/image/upload/v1511636119/1aa3a737-bea1-42e3-b372-6468528f828c_rwyvfz.png")
prod13 = Product.create!(name: "Keybase for Chrome" ,description:"A secure chat button for every profile",hunter_id: user4.id, image_url:"https://res.cloudinary.com/dbyoymbpd/image/upload/c_scale,w_111/v1501282149/3d7074d0-90a3-43fd-a1ef-5f21d7fd3eca_mw3tln.png",product_URL:"https://keybase.io",
  image_two_url:"https://res.cloudinary.com/dbyoymbpd/image/upload/v1511636716/ad0b7c36-ccb2-4078-969a-37108d64a32b_hwivnl.png",
  image_three_url:"https://res.cloudinary.com/dbyoymbpd/image/upload/v1511636725/2c5b6e21-8cca-4665-922b-b0951a2f5cb4_il5agn.png",
  image_four_url:"https://res.cloudinary.com/dbyoymbpd/image/upload/v1511636731/bb71495a-7aa1-4e0a-925f-a0e170c48a36_gylteq.png",
  image_five_url:"https://res.cloudinary.com/dbyoymbpd/image/upload/v1511636735/407aee57-6b7b-4344-8863-9796ebe11eb0_stonud.png")
prod14 = Product.create!(name: "Breaker" ,description:"The best app for listening to podcasts, with your friends 🎧", image_url:"https://res.cloudinary.com/dbyoymbpd/image/upload/c_scale,h_111/v1501282348/5de38845-9c59-485a-be99-40cab79665d5_m7ch0t.jpg", hunter_id: user5.id, product_URL:"https://breaker.audio",
  image_two_url:"https://res.cloudinary.com/dbyoymbpd/image/upload/v1511636764/f6b8a80c-3694-4b51-975b-4c72317a742c_yzresj.jpg",
  image_three_url:"https://res.cloudinary.com/dbyoymbpd/image/upload/v1511636769/a0f52074-0f74-4d1e-a054-17d2e4008d95_fduyca.jpg",
  image_four_url:"https://res.cloudinary.com/dbyoymbpd/image/upload/v1511636774/50fae972-3ea0-4a96-aea6-f67cedcd4a83_tcvhej.jpg",
  image_five_url:"https://res.cloudinary.com/dbyoymbpd/image/upload/v1511636778/0aef2b31-f78a-494a-b3ee-0aab73ff2383_ilx7ax.jpg")
prod15= Product.create!(name: "Coda", description:"It's a new way for docs",
  image_url:"https://res.cloudinary.com/dbyoymbpd/image/upload/v1510025892/d0jqg2z9ob2h9tu3ckiv.png",
  hunter_id: demo.id,
  product_URL:"https://coda.io/welcome",
  image_two_url:"https://res.cloudinary.com/dbyoymbpd/image/upload/v1510025900/obwjoxdqokqxn2ulva9p.gif",
  image_three_url:"https://res.cloudinary.com/dbyoymbpd/image/upload/v1510025925/w3yehysxogpyw8il5jx5.gif")
prod16= Product.create!(name: "Coralogix 2.0", description:"Machine learning powered log analytics, made for startups",
  image_url:"https://res.cloudinary.com/dbyoymbpd/image/upload/v1510026128/momoxmjf1hq0jtvujdr3.jpg",
  hunter_id: demo.id,
  product_URL:"https://coralogix.com/home-producthunt/?ref=producthunt",
  image_two_url:"https://res.cloudinary.com/dbyoymbpd/image/upload/v1510026137/w9k4l479yriys7oo7yst.png",
  image_three_url:"https://res.cloudinary.com/dbyoymbpd/image/upload/v1510026145/iizs04kyqcpn2arnuwno.png",
  image_four_url:"https://res.cloudinary.com/dbyoymbpd/image/upload/v1510026154/ialsnmsfpzoyvzg5d3zp.png",
  image_five_url:"https://res.cloudinary.com/dbyoymbpd/image/upload/v1510026166/lvmb8gqggtg2ya7c77hf.jpg")
prod16= Product.create!(name: "Trello", description:"Organize anything, together",
  image_url:"https://res.cloudinary.com/dbyoymbpd/image/upload/v1510026209/abtbf6yozgbbgrv1tilv.jpg",
  hunter_id: demo.id,
  product_URL:"https://trello.com/?ref=producthunt",
  image_two_url:"https://res.cloudinary.com/dbyoymbpd/image/upload/v1510026249/zll2khcg9sx2ftsccfjp.jpg",
  image_three_url:"https://res.cloudinary.com/dbyoymbpd/image/upload/v1510026259/rai3i5vfhzckypyltti1.jpg",
  image_four_url:"https://res.cloudinary.com/dbyoymbpd/image/upload/v1510026268/wmbypkggsaac2dohnmox.jpg",
  image_five_url:"https://res.cloudinary.com/dbyoymbpd/image/upload/v1510026282/h6dieyjkmjprdagifchc.jpg")
  
