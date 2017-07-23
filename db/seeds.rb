# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


user1 = User.create(username: "john123", password: "123456", image_url: "http://res.cloudinary.com/dbyoymbpd/image/upload/c_scale,w_111/v1500508764/pexels-photo-513516_n4tcxi.jpg")
user2 = User.create(username: "elvispresley", password: "theking", image_url: "http://res.cloudinary.com/dbyoymbpd/image/upload/c_scale,w_97/v1500508597/pexels-photo-270968_bq0jbe.jpg")
user3 = User.create(username: "genghiskhan", password: "mongol", image_url: "http://res.cloudinary.com/dbyoymbpd/image/upload/c_scale,w_111/v1500509289/list-genghis-khan-2-E_t6x4cr.jpg")
user4 = User.create(username: "abelincoln", password: "emancipate", image_url: "http://res.cloudinary.com/dbyoymbpd/image/upload/c_scale,w_111/v1500509040/last_drxfvh.jpg")
user5 = User.create(username: "inkymaze", password: "cheeseburger", image_url: "http://res.cloudinary.com/dbyoymbpd/image/upload/c_scale,w_111/v1500508849/220px-Vladimir_Nabokov_1960s_ql67rv.jpg")
user6 = User.create(username: "alexander", password: "thegreat", image_url: "http://res.cloudinary.com/dbyoymbpd/image/upload/c_scale,w_111/v1500508899/alexander_athens2_v2n7hg.jpg")
demo = User.create(username: "maggie", password: "secretpw", image_url: "http://res.cloudinary.com/dbyoymbpd/image/upload/c_scale,w_111/v1500508952/o-MAGGIE-GYLLENHAAL-facebook_kzxhgg.jpg")

Product.destroy_all

prod1 = Product.create!(name:"Blockstack Browser" ,desc:"Blockstack Browser", image_url:"http://res.cloudinary.com/dbyoymbpd/image/upload/c_scale,w_111/v1500517873/blockstack_lhi31t.jpg",product_url:"https://blockstack.org", hunter_id: User.first.id)
prod2 = Product.create!(name:"21 Lists" ,desc:"Send and receive targeted, paid microtasks", image_url:"http://res.cloudinary.com/dbyoymbpd/image/upload/c_scale,w_111/v1500517968/21co_naxxjg.jpg",product_url:"https://21.co", hunter_id: User.last.id)
prod3 = Product.create!(name:"Glow" ,desc:"A destination for all things fertility", image_url:"http://res.cloudinary.com/dbyoymbpd/image/upload/c_scale,w_111/v1500510214/9YTnIdYCpi_jQyjfwAY4N-lmDTnkv7w447nCc86M9ydNl_fthCcKvFbG1TbEtWZUrYc_w300_nhvz88.png",product_url:"https://glowing.com/", hunter_id: User.third.id)
prod4 = Product.create!(name:"Simple Habit" ,desc:"Modern mindfulness for your busy life", image_url:"http://res.cloudinary.com/dbyoymbpd/image/upload/c_scale,w_111/v1500510317/175x175bb_qbmjld.jpg",product_url:"www.simplehabit.com/", hunter_id: User.second.id)
prod5 = Product.create!(name:"Assembly" ,desc:"All your influencer marketing campaigns under one roof", image_url:"http://res.cloudinary.com/dbyoymbpd/image/upload/c_scale,w_111/v1500512041/bc729c9b-6d5b-4cce-a4cd-b2ba18bbc07d_2_vlowt0.gif",product_url:"https://useassembly.com", hunter_id: User.third.id)
prod6 = Product.create!(name:"Wordmark.it" ,desc:"Helps you choose fonts", image_url:"http://res.cloudinary.com/dbyoymbpd/image/upload/c_scale,w_111/v1500512159/wordmap_jsoffs.jpg",product_url:"https://wordmark.it", hunter_id: User.last.id)
prod7 = Product.create!(name:"Actively" ,desc:"All of your favorite fitness studios in one app", image_url:"http://res.cloudinary.com/dbyoymbpd/image/upload/c_scale,w_111/v1500512311/actively_cd7420.jpg",product_url:"https://actively.ai", hunter_id: User.third.id)
prod8 = Product.create!(name:"Token Data" ,desc:"Database with 300 ICO's and token returns", image_url:"http://res.cloudinary.com/dbyoymbpd/image/upload/c_scale,w_111/v1500517666/tokendata_rqmmej.gif",product_url:"https://www.tokendata.io", hunter_id: User.first.id)
prod9 = Product.create!(name:"WhichWinery" ,desc:"Help plan, track and share your next wine country experience", image_url:"http://res.cloudinary.com/dbyoymbpd/image/upload/c_scale,w_111/v1500510009/WWLogoHorzWhite_kgfu6f.png",product_url:"www.whichwinery.com", hunter_id: User.second.id)
prod10 = Product.create!(name: "Set The Set" ,desc:"Request songs for your upcoming concerts", image_url:"http://res.cloudinary.com/dbyoymbpd/image/upload/c_scale,w_111/v1500509814/A_-C5RyJ_400x400_kae6v0.jpg",product_url:"https://settheset.com/", hunter_id: User.first.id)
