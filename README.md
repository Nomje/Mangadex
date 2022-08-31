# Manga-mongoose<!-- <%- include('../partials/header.ejs') %>
  <table id="list">
    <thead>
      <tr>
        <th>Title</th>
        <th>Author:</th>
        <th>Artist:</th>
        <th>Link to read:</th>
        <th>picture:</th>
      </tr>
    </thead>
   <tbody>
      <% mangas.forEach(fucntion(j) {%>
        <tr>
          <td><%= j.title %></td>
          <td><%= j.artist %></td>
          <td><%= j.author %></td>
          <td><%= j.linkToRead %></td>
          <td><%= j.picture %></td>
          <td><a href="/mangas/<%=j.id%>">See Info</a></td>
        </tr>
      <% }); %>
    </tbody>
  </table>
    



function addManga(req, res) { 
    const manga = new Manga(req.body);
    console.log(manga);
    manga.save(function(err){
        if (err) return res.render('mangas/new');
        res.redirect('/')
    })
}


function cdManga (req,res){
    // req.body.nowShowing = !!req.body.nowShowing;
    // for(let key in req.body){
    //     if(req.body[key]==='')delete req.body[key];
    // }
    // const manga = new Manga(req.body);
    // manga.save(function(err){
    //     if(err) return res.redirect('/mangas/new');
    //     res.redirect(`/mangas/${manga._id}`);
    // })
    Manga.findById(req.params.id, function(err, manga){
        res.render('mangas/show',{title: 'Manga Info', manga})
    })
}