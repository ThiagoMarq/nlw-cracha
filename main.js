const SocialMedia = {
  github: 'ThiagoMarq',
  youtube: 'youtube',
  facebook: 'facebook',
  instagram: 'thiagomarqs_',
  twitter: 'twitter'
}

function ChangeSocialMedia() {
  for (let li of SocialLinks.children) {
    const social = li.getAttribute('class')
    li.children[0].href = `https://www.${social}.com/${SocialMedia[social]}`
  }
}

ChangeSocialMedia()

function GetInfoGit() {
  const url = `https://api.github.com/users/${SocialMedia.github}`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      UserName.textContent = data.name
      UserGit.href = data.html_url
      UserBio.textContent = data.bio
      UserAvatar.src = data.avatar_url
      UserId.textContent = data.login
    })
}

GetInfoGit()
