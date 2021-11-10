  async function update_item(){
    const form = event.target.form
      const conn = await fetch ("https://coderspage.com/iceland/item/44c69c72-bcbe-4dd8-b401-a0aeedb0b0d1",{
          method: "PATCH",
            headers : {
                'Access-Control-Allow-Origin':'*'
            }

          body : new FormData(form)
      })

  }