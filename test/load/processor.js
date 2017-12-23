  //
  // my-functions.js
  //
  module.exports = {
    setJSONBody: setJSONBody,
    logHeaders: logHeaders,
    setText: setText,
    setFunc: setFunc
  }

  function setJSONBody(requestParams, context, ee, next) {
    return next(); // MUST be called for the scenario to continue
  }

  function logHeaders(requestParams, response, context, ee, next) {
    console.log(response.headers);
    return next(); // MUST be called for the scenario to continue
  }

  function setFunc(params, context, ee, next) {
    const funcs = [
          "func_echoit"
        , "func_base64"
        , "func_markdown"
        , "func_wordcount"
        ];

    context.vars["Function"] = funcs[Math.floor(Math.random() * funcs.length)];
    return next();
  }

  function setText(requestParams, context, ee, next) {
    context.vars["ReqText"] = `
    King John

    ACT I SCENE I   KING JOHN'S palace.  
      Enter KING JOHN, QUEEN ELINOR, PEMBROKE,
    ESSEX, SALISBURY, and others, with CHATILLON   
    KING JOHN   Now, say, Chatillon, what would France with us?  
    CHATILLON   Thus, after greeting, speaks the King of France  
      In my behavior to the majesty,   
      The borrow'd majesty, of England here.   5
    QUEEN ELINOR  A strange beginning: 'borrow'd majesty!'   
    KING JOHN   Silence, good mother; hear the embassy.  
    CHATILLON   Philip of France, in right and true behalf   
      Of thy deceased brother Geffrey's son,   
      Arthur Plantagenet, lays most lawful claim   10
      To this fair island and the territories,   
      To Ireland, Poictiers, Anjou, Touraine, Maine,   
      Desiring thee to lay aside the sword   
      Which sways usurpingly these several titles,   
      And put these same into young Arthur's hand,   15
      Thy nephew and right royal sovereign.  
    KING JOHN   What follows if we disallow of this?   
    CHATILLON   The proud control of fierce and bloody war,  
      To enforce these rights so forcibly withheld.  
    KING JOHN   Here have we war for war and blood for blood,  20
      Controlment for controlment: so answer France.   
    CHATILLON   Then take my king's defiance from my mouth,  
      The farthest limit of my embassy.  
    KING JOHN   Bear mine to him, and so depart in peace:  
      Be thou as lightning in the eyes of France;  25
      For ere thou canst report I will be there,   
      The thunder of my cannon shall be heard:   
      So hence! Be thou the trumpet of our wrath   
      And sullen presage of your own decay.  
      An honourable conduct let him have:  30
      Pembroke, look to 't. Farewell, Chatillon.   
      Exeunt CHATILLON and PEMBROKE  
    QUEEN ELINOR  What now, my son! have I not ever said   
      How that ambitious Constance would not cease   
      Till she had kindled France and all the world,   
      Upon the right and party of her son?   35
      This might have been prevented and made whole  
      With very easy arguments of love,  
      Which now the manage of two kingdoms must  
      With fearful bloody issue arbitrate.   
    KING JOHN   Our strong possession and our right for us.  40
    QUEEN ELINOR  Your strong possession much more than your right,  
      Or else it must go wrong with you and me:  
      So much my conscience whispers in your ear,  
      Which none but heaven and you and I shall hear.  
      Enter a Sheriff  
    ESSEX   My liege, here is the strangest controversy  45
      Come from country to be judged by you,   
      That e'er I heard: shall I produce the men?  
    KING JOHN   Let them approach.   
      Our abbeys and our priories shall pay  
      This expedition's charge.  50
      Enter ROBERT and the BASTARD   
      What men are you?  
    BASTARD   Your faithful subject I, a gentleman   
      Born in Northamptonshire and eldest son,   
      As I suppose, to Robert Faulconbridge,   
      A soldier, by the honour-giving hand   55
      Of Coeur-de-lion knighted in the field.  
    KING JOHN   What art thou?   
    ROBERT  The son and heir to that same Faulconbridge.   
    KING JOHN   Is that the elder, and art thou the heir?  
      You came not of one mother then, it seems.   60
    BASTARD   Most certain of one mother, mighty king;   
      That is well known; and, as I think, one father:   
      But for the certain knowledge of that truth  
      I put you o'er to heaven and to my mother:   
      Of that I doubt, as all men's children may.  65
    QUEEN ELINOR  Out on thee, rude man! thou dost shame thy mother  
      And wound her honour with this diffidence.   
    BASTARD   I, madam? no, I have no reason for it;   
      That is my brother's plea and none of mine;  
      The which if he can prove, a' pops me out  70
      At least from fair five hundred pound a year:  
      Heaven guard my mother's honour and my land!   
    KING JOHN   A good blunt fellow. Why, being younger born,  
      Doth he lay claim to thine inheritance?  
    BASTARD   I know not why, except to get the land.  75
      But once he slander'd me with bastardy:  
      But whether I be as true begot or no,  
      That still I lay upon my mother's head,  
      But that I am as well begot, my liege,--   
      Fair fall the bones that took the pains for me!--  80
      Compare our faces and be judge yourself.   
      If old sir Robert did beget us both  
      And were our father and this son like him,   
      O old sir Robert, father, on my knee   
      I give heaven thanks I was not like to thee!   85
    KING JOHN   Why, what a madcap hath heaven lent us here!   
    QUEEN ELINOR  He hath a trick of Coeur-de-lion's face;   
      The accent of his tongue affecteth him.  
      Do you not read some tokens of my son  
      In the large composition of this man?  90
    KING JOHN   Mine eye hath well examined his parts  
      And finds them perfect Richard. Sirrah, speak,   
      What doth move you to claim your brother's land?   
    BASTARD   Because he hath a half-face, like my father.   
      With half that face would he have all my land:   95
      A half-faced groat five hundred pound a year!  
    ROBERT  My gracious liege, when that my father lived,  
      Your brother did employ my father much,--  
    BASTARD   Well, sir, by this you cannot get my land:   
      Your tale must be how he employ'd my mother.   100
    ROBERT  And once dispatch'd him in an embassy  
      To Germany, there with the emperor   
      To treat of high affairs touching that time.   
      The advantage of his absence took the king   
      And in the mean time sojourn'd at my father's;   105
      Where how he did prevail I shame to speak,   
      But truth is truth: large lengths of seas and shores   
      Between my father and my mother lay,   
      As I have heard my father speak himself,   
      When this same lusty gentleman was got.  110
      Upon his death-bed he by will bequeath'd   
      His lands to me, and took it on his death  
      That this my mother's son was none of his;   
      And if he were, he came into the world   
      Full fourteen weeks before the course of time.   115
      Then, good my liege, let me have what is mine,   
      My father's land, as was my father's will.   
    KING JOHN   Sirrah, your brother is legitimate;  
      Your father's wife did after wedlock bear him,   
      And if she did play false, the fault was hers;   120
      Which fault lies on the hazards of all husbands  
      That marry wives. Tell me, how if my brother,  
      Who, as you say, took pains to get this son,   
      Had of your father claim'd this son for his?   
      In sooth, good friend, your father might have kept   125
      This calf bred from his cow from all the world;  
      In sooth he might; then, if he were my brother's,  
      My brother might not claim him; nor your father,   
      Being none of his, refuse him: this concludes;   
      My mother's son did get your father's heir;  130
      Your father's heir must have your father's land.   
    ROBERT  Shall then my father's will be of no force   
      To dispossess that child which is not his?   
    BASTARD   Of no more force to dispossess me, sir,  
      Than was his will to get me, as I think.   135
    QUEEN ELINOR  Whether hadst thou rather be a Faulconbridge   
      And like thy brother, to enjoy thy land,   
      Or the reputed son of Coeur-de-lion,   
      Lord of thy presence and no land beside?   
    BASTARD   Madam, an if my brother had my shape,  140
      And I had his, sir Robert's his, like him;   
      And if my legs were two such riding-rods,  
      My arms such eel-skins stuff'd, my face so thin  
      That in mine ear I durst not stick a rose  
      Lest men should say 'Look, where three-farthings goes!'  145
      And, to his shape, were heir to all this land,   
      Would I might never stir from off this place,  
      I would give it every foot to have this face;  
      I would not be sir Nob in any case.  
    QUEEN ELINOR  I like thee well: wilt thou forsake thy fortune,   150
      
    Bequeath thy land to him and follow me?

     
      I am a soldier and now bound to France.  
    BASTARD   Brother, take you my land, I'll take my chance.  
      Your face hath got five hundred pound a year,  
      Yet sell your face for five pence and 'tis dear.   155
      Madam, I'll follow you unto the death.   
    QUEEN ELINOR  Nay, I would have you go before me thither.  
    BASTARD   Our country manners give our betters way.  
    KING JOHN   What is thy name?  
    BASTARD   Philip, my liege, so is my name begun,   160
      Philip, good old sir Robert's wife's eldest son.   
    KING JOHN   From henceforth bear his name whose form thou bear'st:   
      Kneel thou down Philip, but rise more great,   
      Arise sir Richard and Plantagenet.   
    BASTARD   Brother by the mother's side, give me your hand:   165
      My father gave me honour, yours gave land.   
      Now blessed by the hour, by night or day,  
      When I was got, sir Robert was away!   
    QUEEN ELINOR  The very spirit of Plantagenet!  
      I am thy grandam, Richard; call me so.   170
    BASTARD   Madam, by chance but not by truth; what though?  
      Something about, a little from the right,  
      In at the window, or else o'er the hatch:  
      Who dares not stir by day must walk by night,  
      And have is have, however men do catch:  175
      Near or far off, well won is still well shot,  
      And I am I, howe'er I was begot.   
    KING JOHN   Go, Faulconbridge: now hast thou thy desire;   
      A landless knight makes thee a landed squire.  
      Come, madam, and come, Richard, we must speed  180
      For France, for France, for it is more than need.  
    BASTARD   Brother, adieu: good fortune come to thee!   
      For thou wast got i' the way of honesty.   
      Exeunt all but BASTARD   
      A foot of honour better than I was;  
      But many a many foot of land the worse.  185
      Well, now can I make any Joan a lady.  
      'Good den, sir Richard!'--'God-a-mercy, fellow!'--   
      And if his name be George, I'll call him Peter;  
      For new-made honour doth forget men's names;   
      'Tis too respective and too sociable   190
      For your conversion. Now your traveller,   
      He and his toothpick at my worship's mess,   
      And when my knightly stomach is sufficed,  
      Why then I suck my teeth and catechise   
      My picked man of countries: 'My dear sir,'   195
      Thus, leaning on mine elbow, I begin,  
      'I shall beseech you'--that is question now;   
      And then comes answer like an Absey book:  
      'O sir,' says answer, 'at your best command;   
      At your employment; at your service, sir;'   200
      'No, sir,' says question, 'I, sweet sir, at yours:'  
      And so, ere answer knows what question would,  
      Saving in dialogue of compliment,  
      And talking of the Alps and Apennines,   
      The Pyrenean and the river Po,   205
      It draws toward supper in conclusion so.   
      But this is worshipful society   
      And fits the mounting spirit like myself,  
      For he is but a bastard to the time  
      That doth not smack of observation;  210
      And so am I, whether I smack or no;  
      And not alone in habit and device,   
      Exterior form, outward accoutrement,   
      But from the inward motion to deliver  
      Sweet, sweet, sweet poison for the age's tooth:  215
      Which, though I will not practise to deceive,  
      Yet, to avoid deceit, I mean to learn;   
      For it shall strew the footsteps of my rising.   
      But who comes in such haste in riding-robes?   
      What woman-post is this? hath she no husband   220
      That will take pains to blow a horn before her?  
      Enter LADY FAULCONBRIDGE and GURNEY  
      O me! it is my mother. How now, good lady!   
      What brings you here to court so hastily?  
    LADY FAULCONBRIDGE  Where is that slave, thy brother? where is he,   
      That holds in chase mine honour up and down?   225
    BASTARD   My brother Robert? old sir Robert's son?   
      Colbrand the giant, that same mighty man?  
      Is it sir Robert's son that you seek so?   
    LADY FAULCONBRIDGE  Sir Robert's son! Ay, thou unreverend boy,   
      Sir Robert's son: why scorn'st thou at sir Robert?   230
      He is sir Robert's son, and so art thou.   
    BASTARD   James Gurney, wilt thou give us leave awhile?  
    GURNEY  Good leave, good Philip.   
    BASTARD   Philip! sparrow: James,  
      There's toys abroad: anon I'll tell thee more.   235
      Exit GURNEY  
      Madam, I was not old sir Robert's son:   
      Sir Robert might have eat his part in me   
      Upon Good-Friday and ne'er broke his fast:   
      Sir Robert could do well: marry, to confess,   
      Could he get me? Sir Robert could not do it:   240
      We know his handiwork: therefore, good mother,   
      To whom am I beholding for these limbs?  
      Sir Robert never holp to make this leg.  
    LADY FAULCONBRIDGE  Hast thou conspired with thy brother too,  
      That for thine own gain shouldst defend mine honour?   245
      What means this scorn, thou most untoward knave?   
    BASTARD   Knight, knight, good mother, Basilisco-like.   
      What! I am dubb'd! I have it on my shoulder.   
      But, mother, I am not sir Robert's son;  
      I have disclaim'd sir Robert and my land;  250
      Legitimation, name and all is gone:  
      Then, good my mother, let me know my father;   
      Some proper man, I hope: who was it, mother?   
    LADY FAULCONBRIDGE  Hast thou denied thyself a Faulconbridge?  
    BASTARD   As faithfully as I deny the devil.   255
    LADY FAULCONBRIDGE  King Richard Coeur-de-lion was thy father:   
      By long and vehement suit I was seduced  
      To make room for him in my husband's bed:  
      Heaven lay not my transgression to my charge!  
      Thou art the issue of my dear offence,   260
      Which was so strongly urged past my defence.   
    BASTARD   Now, by this light, were I to get again,   
      Madam, I would not wish a better father.   
      Some sins do bear their privilege on earth,  
      And so doth yours; your fault was not your folly:  265
      Needs must you lay your heart at his dispose,  
      Subjected tribute to commanding love,  
      Against whose fury and unmatched force   
      The aweless lion could not wage the fight,   
      Nor keep his princely heart from Richard's hand.   270
      He that perforce robs lions of their hearts  
      May easily win a woman's. Ay, my mother,   
      With all my heart I thank thee for my father!  
      Who lives and dares but say thou didst not well  
      When I was got, I'll send his soul to hell.  275
      Come, lady, I will show thee to my kin;  
      And they shall say, when Richard me begot,   
      If thou hadst said him nay, it had been sin:   
      Who says it was, he lies; I say 'twas not.   
      Exeunt   
    Next: King John, Act 2, Scene 1

    _________`

    return next();
  }
