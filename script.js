
*{
margin:0;
padding:0;
box-sizing:border-box;
font-family:Arial,sans-serif;
}

body{
background:#f5f7fa;
color:#222;
line-height:1.8;
}

.container{
width:90%;
max-width:1200px;
margin:auto;
display:flex;
justify-content:space-between;
align-items:center;
}

header{
background:#0b3c5d;
padding:20px 0;
position:sticky;
top:0;
z-index:1000;
}

header h2{
color:#fff;
}

nav a{
color:#fff;
text-decoration:none;
margin-left:20px;
font-weight:bold;
transition:.3s;
}

nav a:hover{
color:#00c2ff;
}

.hero{
height:90vh;
background:linear-gradient(rgba(11,60,93,.75),rgba(11,60,93,.75)),
url("https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1600&q=80");
background-size:cover;
background-position:center;
display:flex;
justify-content:center;
align-items:center;
text-align:center;
color:white;
}

.overlay{
max-width:800px;
padding:20px;
}

.hero h1{
font-size:52px;
margin-bottom:20px;
}

.hero p{
font-size:22px;
margin-bottom:30px;
}

button{
background:#00c2ff;
color:white;
border:none;
padding:15px 35px;
font-size:18px;
border-radius:8px;
cursor:pointer;
transition:.3s;
}

button:hover{
background:#0098c7;
transform:translateY(-3px);
}

.services{
padding:80px 10%;
}

.services h2{
text-align:center;
font-size:36px;
margin-bottom:40px;
color:#0b3c5d;
}

.cards{
display:grid;
grid-template-columns:repeat(auto-fit,minmax(280px,1fr));
gap:25px;
}

.card{
background:white;
padding:30px;
border-radius:15px;
box-shadow:0 8px 20px rgba(0,0,0,.08);
transition:.3s;
}

.card:hover{
transform:translateY(-8px);
}

.card h3{
margin-bottom:15px;
color:#0b3c5d;
}

footer{
background:#0b3c5d;
color:white;
text-align:center;
padding:25px;
margin-top:60px;
}

@media(max-width:768px){

.container{
flex-direction:column;
}

nav{
margin-top:15px;
}

.hero h1{
font-size:34px;
}

.hero p{
font-size:18px;
}

}
