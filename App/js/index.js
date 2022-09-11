// The default code is a module class (inherited from xui.Module)
// Ensure that all the value of "key/value pair" does not refer to external variables
xui.Class('App', 'xui.Module',{
    Instance:{
        // Dependency classes
        Dependencies:[],
        // Required modules
        Required:[],

        // To initialize properties
        properties : {},

        // To initialize instance(e.g. properties)
        initialize : function(){
        },

        // To initialize internal components (mostly UI controls)
        // *** If you're not a skilled, dont modify this function manually ***
        iniComponents : function(){
            // [[Code created by CrossUI RAD Studio
            var host=this, children=[], append=function(child){children.push(child.get(0));};
            
            append(
                xui.create("xui.UI.Image")
                .setHost(host,"Synth V")
                .setName("Synth V")
                .setDesc("Screenshot of Synth V interface.")
                .setLeft("0.7619047619047619em")
                .setTop("1.5238095238095237em")
                .setWidth("29.257142857142856em")
                .setHeight("14.780952380952382em")
                .setSrc("https://dreamtonics.com/synthesizerv-gen1/common/images/download_pic.png")
            );
            
            append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label9")
                .setLeft("11.428571428571429em")
                .setTop("16.761904761904763em")
                .setWidth("8.457142857142857em")
                .setHeight("3.5047619047619047em")
                .setCaption("Image of the Synth V interface.")
            );
            
            append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label13")
                .setLeft("32.76190476190476em")
                .setTop("1.5238095238095237em")
                .setWidth("23.695238095238096em")
                .setHeight("14.17142857142857em")
                .setCaption("SYNTH V is a vocal synthesizer created by Dreamtonics, it is mainly known for its realistic vocals and easy use.")
            );
            
            append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label16")
                .setLeft("32.76190476190476em")
                .setTop("6.095238095238095em")
                .setWidth("23.695238095238096em")
                .setHeight("11.123809523809523em")
                .setCaption("Some of its most well known voicebanks are: Eleanor Forte, Tsurumaki Maki and Koharu Rikka.")
            );
            
            append(
                xui.create("xui.UI.Image")
                .setHost(host,"xui_ui_image11")
                .setLeft("32.76190476190476em")
                .setTop("9.904761904761905em")
                .setWidth("9.447619047619048em")
                .setHeight("9.447619047619048em")
                .setSrc("http://pm1.narvii.com/7151/c7fc9d39419855fd23329369fdd53f92030301d5r1-879-879v2_00.jpg")
            );
            
            append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label23")
                .setLeft("33.523809523809526em")
                .setTop("19.80952380952381em")
                .setWidth("7.695238095238095em")
                .setHeight("3.5047619047619047em")
                .setCaption("Eleanor Forte.")
            );
            
            append(
                xui.create("xui.UI.Image")
                .setHost(host,"xui_ui_image18")
                .setLeft("44.95238095238095em")
                .setTop("10.666666666666666em")
                .setWidth("8.685714285714285em")
                .setHeight("8.685714285714285em")
                .setSrc("https://i1.sndcdn.com/artworks-JyfGBDewxraX6mAx-yQWLYQ-t500x500.jpg")
            );
            
            append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label37")
                .setLeft("45.714285714285715em")
                .setTop("19.80952380952381em")
                .setWidth("6.171428571428572em")
                .setHeight("2.742857142857143em")
                .setCaption("Tsurumaki Maki")
            );
            
            append(
                xui.create("xui.UI.Image")
                .setHost(host,"xui_ui_image28")
                .setLeft("39.61904761904762em")
                .setTop("22.095238095238095em")
                .setWidth("8.685714285714285em")
                .setHeight("7.923809523809524em")
                .setSrc("data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBUUFBcVFBUYGBcXHCAXGxsaGh0aHRwkHRweGxsXHRsbICwkGx0pIBoeJTYlKTIwMzMzHCQ5PjkyPSwyMzABCwsLEA4QHRISHTAkICkyMjIwMjIyMjIyMjAyMjIyMjIyMjIyMjIyMjIyMjIwMjIyMjIyMjIyMjAyMj0yMzIyMP/AABEIAOEA4QMBIgACEQEDEQH/xAAcAAEAAgMBAQEAAAAAAAAAAAAABAUCAwYHAQj/xABKEAACAQIEAwYCBwYDBAgHAAABAhEAAwQSITEFQVEGEyJhcYEykSNCUmJyobEUM4KSwfCissIHU9HhNENzg5OztPEVFiQ1Y3Sj/8QAGQEBAQEBAQEAAAAAAAAAAAAAAAECAwQF/8QAIREBAQACAgIDAAMAAAAAAAAAAAECESExAxJBUWETFHH/2gAMAwEAAhEDEQA/APZaUpQKUpQKUpQKUpQKUpQKUpQKUpQKUpQKUpQKUpQKUpQKUpQKUpQKUpQKUpQKUpQKUpQKUpQKUpQKVExmPt2gS7AQJ846x086rb/aSyEzDPmIlVZHWfViIHXr0BOlBa4rEpbXMzQPck+QA1Y+Q1qkxPGrjA92gRftP4m9QoML6knzAqvUu5Ny6ZY6AbAfcUcgI111jU6TXy7YD/Hr0A2+Q+L39oq6RHvob2rvdueee4FP8Nsi2fYVusoUgZmVZ3BP6aTW1cMPsj31NCsaZlnoY/8AeqJb2nBDIzDSZ7y4B/LLT6GY61nY4zcQxcAYemVh/Q+kD1NYYe4ZiI/TyI861Yi3rvp5Ez6/+1B0eGxK3BKGeR5EeoqRXHWFa22a3cM9GP6Hp6gz+ddFw7HC4CG8LrGZfXZh5GD8jvuZYqfSlKgUpSgUpSgUpSgUpSgUpSgUpSgUpSgUpSgUpSg43HXhcuMxOmYEe05flAPrWi4ogkpPXbnyJPOvpXJmtt4blttJHhYAnITG4Kncaia1viFO6MTMhDByzEneGMyAdvSTWkb8KTl8RPh8IkyY3Ann67wBPOpJuBd/78hUawAoJbeZjpyHzj9a+XRzY6xPko/pQZXMUIJaAo67Dlr9reIrEYoxPdBU5G4YJ6eAKSJ6GttjBGBcfTmoP1R9tujnX8I03zE/Vt5jnI8lHQHr5nSflyoMbWIBEFAB0Goj5D5V8ZshIUZV67gfiA2H3h+Q1rctsBgOW35E/wBPzr6ywQfY/wB/L50H3ICNeWhBO3of75bVGvB1+B2U6hSDBiQWQEjwzEEeU8tJKHKwXroPYTHsJ+ccqYlI0OzR7T8JoNeA4lcUoe8Yqdw/i0mI18QO+s6RqDOnV2rgZQw2In/lXD3bgRgGBOZgIXqTr+FWEtPJlblXZcNnurZIglQxHQsJI+ZqVUqlKVApSlApSlApSlApSlApSlApSlApSlApWDuFEkgDqdKhYq++yAAfaOpPkq/1OnkalsiyWua4zilvX3QDS2RaB8wA9xh1jPbT1k8qj4fDqxkzmlgNTyJgb/ZIPvVunZ9MxfNcUncByZM7ktPXlFbLfArS6sztrPid4Ptny/lSZxbhVdbQA5jAAOVdgJ+s3ry9j1orB7gABfWTlBYafCuYeEa66nkRzqZiWwtorJthvqhEVn03IgMQNpPmKp8ZxR7hKoXVDKGTDt4iCoy6JMRIkxzBMie9vUPWTurg4vMiLyuED2+I+xUfI1tSzMkbAkT+HQ/nNViGbgiIUECNpGXQdIn5MtSLOKK2yPtTHlnbf/FXRhIa2QwnmCf8sfrWZtSD7/lUhcQhyk/ZbT8OWRWhsWBZY/WIbTzMn+ooNWLsxb7z7LIwPlmAf/AzV8x7LcBEaRHt/citHEsWe4uDkLb++hyx8hXxzmKBT8Zyg76ESTHPwgn29qCJcOiXGGY22lh9rL8Yj7yax5xtNd0DXGJpnGhyt84YoTueQXT1rouCXs1oDmhNv2UwpPmVyn3qUixpSlRSlKUClKUClKUClKUClKUClKUCqjifFMhFq1DXnOVQ05F0zMzEclXxRuZUaZhVjiLuRZiTsB1J2A9TXCYu5nuuQxzK0hl675lnlmJieRAOlNbHT4TDMIa5cN259ogKo8kQaIPm3UmpF64La5jqdgOZPICq7h/GO8TVDnXwvGizEysmcp3HrG4NfLlxnbM2w0UDYdT6n9B51wrvjN/41OzMZYySTofhjoBsAOtQrnDnI8NxVMz+7U+wJMj11rPG4oWycpBuEDKDOgJ1Zo5abSJKwOZFRiMVcLIS7lc0FQ5tggqwA8EcyD7VccLeVyzmPDNMK/eMpTxyMzTmBnVTnOpEHQculZYZBbthzq5gLH2n0GUfWaPnsKs8LkyAoI5nrPOSdSdBqfKseF4Rf310hLdom2ucgKSDkLkkwNRlE+Z5iO1uo8+t1tOHNpLbMJnMDGuuXOSObABCBzhRudK1XiBbDDYFfydQf0NSMd2kwTjIuMw/eKQVHeJ8QPwzOkiV/iqLdwzMhQeE3AWCNtqZJDa/CdZGkOvkKzjeGsu2511Hofzg/wBKxxJgHrIAHXWSPkDUgMHTPBEoHg7idYPoJHtXzu81wdE8Z/EfgHsJb+JetdNsIuPGW2ANfEo9lYM5/lVqjsmbJb1i2MxIMRl+AAjUHw7+TcxU+1irTXLinNcyhrOREZyZ0uE5RC6+HUjUHrUXBqRbZWBDqxzSIJ+JQdzuFHM+p3qTJbEhEghRtDJ+Wn+Srfs9oLg6sG+aKv8AoqtI+kH4v1X/AJ1P7ONIJ6pbPvLg/pVqLylKVlSlKUClKUClKUClKUClKUCtV+6FVmbZQWPPQCTpzraTXG9qOKG5bVUI7lszF5+PJuikaquaDO5CmNNSk2Ocudq7z4i5bxDC2qMyAZcpRjoyu07ZfCr7QzEnUVsZiHzf3/cfrUOybfE1WWW3j0UKQ3hTEhRowPK5A9RroQAVqLeLu4ZzauIwy7230ZPNDtHTdTGkb1uQdTdd4Pd3DbcgAMApkAzlOcEDnDRpJ6mrC1jnNhnVwbiZcyunigsqloQqDlzaiByOzLNFhcUlxZRttwdGX1X+o0PImpeA7xzOQi2pEN4ZYqTsSdLakfeMzAG9TLGXtZlZ0kJhrh1bc6s7RqYALQPkB6AVtx2EWCERna2veH8W6gnMADpsJPjGh3qdmCLmMk7gD5CJ3JJgE+umtfOFYkGbdyCzs3ktzN4u7UnTOg8OU6lQD9Uhc5cTgx1vlIsooQG2PCdecmRImdZ2rju0XZ39ouhzcudxD3Ciktshuju7ZJVHc94Jg/uyYJNdlaTIzWyHCnxIWJac0syZ5OZgZOpnfpJjqhR3RtbTqTy0VtHHMwGYkMNhcZeQFS3c2SarxvCcPtrdQYoMlrMM+U52AK5oEfFoRtrE869g7OcGayFRGa5g7iB7QczcsFlnIG3yFW0jYgjXNNRX7GJcLBggDKEa4o8TrEQF1gwBqei7gRXaIoAAUQFAAHQDQCs5ZTXDrljJeFc3Dyruy6q4+EmIJZnPsS7fkOVaDhClty75AZJIOoHMg6QYk5jAGnJRV1UDi/D0xFtrTlgjRmykqSJ1WRtI0nz6wRn3rPrHGv8A7ScFbZbOHtvcVYEoAqgA6lcxDPA1nLr11mri9irdy84tuG7y2t2NjGYItyDrDTA/B51PucLwtu0V/Z7Xd2wXyC2pHh8U7fFpvuapsIv/ANS5YhnK5XYc2VlZo6ANKD7qKOVawu7wmU1E/EXMrg7wZ/lts8f4as+zNuLfoFX8s/8Arqquqxu5vqW0a4x+9KraX3ZX9getdJwvDd3bVYjnHSdh7CB7V0rCZSlKgUpSgUpSgUpSgUpSgUpSgp+0wc4diswDLgCSyAHMABqRsSBuARrMHzzB9obLNcsX1Y4W7rmB8SPEd6oGykRMTrrBzNXpHaG6Uwt4r8RQov4n8CD+ZhXl/HuzLWhnsr9HEZVBMADRkgaggSV3BmJBgalnVNIvH+zV3CxetnvbPxretnQDcFivwHow8Om4JipVjtIl9Ba4ihuoB4byDLeT5fGPTXQSHmqvgfaO/hD9G4NttSjeJGncgA+EnXVTz1mrlrnC8YNScBeOp0DWSfkFiT/+MmtX9RCxPZq6o77BXRi7SnRrZ+lTyZBrm/Dr90VL7G37q95bu5xbthcou5gULEgWwGGZpCkhTJEaTMVqfsbjLE37Fy2yoCwu2rpU5QM2u2mm0keteiYPs4jIj3/pMQVBuXYAZmIE6RlyiIAjQAVm1XO37rO31gBt9o9SY+HoOYE7EzUbEyRkyg/ciVHm3Lzjc/nXQ43gYSPpzkJ0DDLHPVrcactRzFUuLQKxVbiuoA+BSoB3iSxmAR0ifam0bMHi7ga3buXGuW2YIVbKQJ0UhiM2YGIJMHaBIjoX4YdMt24I2+FveWBO07kzOs1yjbQpg9d4O4Mc40+VdXwriAuW1J0B85ykEqyE+TArPlXLycdOmHKbZtldBAA5Db/lrUhaAVS8QZu8YF2AAXKFZlEEbnKRJLZhP3R51y65dZPa6i9UjnWo6jT0+Whqk/ab/hW0yklgPGC4C/WaQwbTfU67bkVbYvFpaXPcYKu3mT0UDVjpsNasu4mWNwvKv4y4S0QGytcZbSnnLHUgHQkLmaPuxVRh8lsloIREiTM7jrqWY7dcukzpo4liTiHDMCFAYKk/DOWWJGhc/IDQTqW096BmNwhgBqWcKQBpqHIXmfHIOp0rthjqOOWW6kYXHXi8qoYM6nI0hQ2ySw1IHxFRm2nkTXYcNvl0hmDMphmAygnfMokwh5anQbneuZwPDrjqGt27eVtM1y2FYgGdWVgSsgEeEzAM866jA4TuwZMsYkgZRoIhVk5V3MEnfeqiZSlKBSlKBSlKBSlKBSlKBSlKCm7QtK20GpZw38gzof8AxBb+dReIJFpo2UpH86r+hrbxBu8xAUai2AD5E/Sf6Lfzpi0m1cH3C38sN/prFaip4t2Qw+JzMFNq5uWQCG6lrexPmIJ61wfGOx2JsAuALtsal0OwHNkaCvtmHnXravlYN7/Peo/aMxaIH/WEKTuAsFnaOcKp05yBzrWOdiWPHez/AAt7uKS0EYZnUXPCRAEO2fTTwa69R1Fe/wBVfBMB3aEkZWuEMV+yAIRPMqNCeZnlAEXtNcOTINspduhgqiqRzBLzH3K1btEnGYuywguSVnVMzESCIlAYJ2j+tcseHh3hHdbamWhrbGTrkzBYnxZmImJHiJJilxNgvcDEkqqyg5A6ByerwTr9k6fWm54Re8JtSVLglGjSQApX8QjMAdwTHwmplLJwuPbW+BKMygaEsV1OoZYG/NTofLKecVJ4BiA6MukzngbAMBI/ECDmHImDW/E27dzKLhcAnKNcqhpgBj9VifhbrADSwzWmE4NhkXKbZbnFwvc1kmfpGbWSTPOTWde0al9a02cUUOVHU/cZv0Ill+RGm1bbmLw9zS6e7ZfttkInkHBggwDAMGBIqv45YU3coXKtu2G8HhIbMTAyxMryOkgHcCNHEcGcRYYQBda2wXoHKkZT93P+lYyxsbxsy/E+/wAYw9kqltlZrhK582dEhSxzvPICcgM68hLDn7dw4m4neOMzKe8OaCqsTFq2u6kiJAgjLLa5Z6PBLbeyiqqm0UUBYBUrlECNiIiqvH4LvLhJYi3aUpbRCUE/XbwkAyAFAOgOfqK6zDXTlct3lAtd4bdu4ygLAV1dYLMxUBgp0gOAADE55EQCeq4Naw1xQyWxnQ6hpYo28rnmJ5HTpoQQKPH4k9wJgu8KRrurDvDptGVteuUbkA0y4q5b+lts6n6+RgpYKTm+JWU5SS4kEasOZpjulkj1Olclw7tL4QzlnU6aqoYHnmKwPkvvFdDgMYt5M6HSSNeRGhB/vUEEaGiJlKUoFKUoFKUoFKUoFKUoFKVD4pcy2mgwWART5uQi/mwoKnBjMxc/9YWefI5cnyV8v8NTlUFsp2MqfcEV8sqM2UbBRHu7j9FFfW0f0b+tYaa0Q5EB3yge4EH8wa0ZDdv2kPwWkN1/MlgLSx0lHb+Bepqcy/EPssf8XjH5kiqTGXst66XYizCWzlQnVUDku2b93Fw6AbgydgURfY3iCWkzswg7AESxG4Gse+w51ymNx9y53hiRcygzoFVdVROZ8RJLNEzEAAV94jwoOFu4dhG0JGUjchA2lu5tuNYgxoy1+G7O2rnjW9dLA5WzBO8U81YshZWg+41EgzW5YaagY0P9+fka2o2UaQRvocrfI6T5yKnXODkL4HLxyuEE+zgfkwM9VqpxN5bbBbp7tiJAfwyNpDaqfYmtTKU1pL/aixy94DIKm3cWQwO4jRm/FLfKrns9jXKm1fiUBKOCWlQdFJYSWAga77jeF5f9tsRretj1dI/WsmuW2Xw3VcfZVwc0gjJE85iNtaesh2um4zh3uO5fINLYdgRbOTMR4/hEl21JE6biK24W+iAoziQxIEyzZ/pMwVdSJYjQcjVbhcG+RVDWwsRGRj6yTcE/KpPDcG+GJ7u/lU692VlATzAnMp9DrOs6VjKzKad8fDnjd6SeGW+5Z+7lrVzPdRPsXAS1y2s6hXJY5fqlH6gCDjcQEQLae413KTC5Ssgspe53ikIM4aQIYwYGhIxxN4j4ouW8zOVRLiCWEZdm8Ork6wS2ukgx74tsF7u0mQkeAEqjZvCpdUOVgCc2mjBSPSS/q/wZXfCDYe/c1uQdIlEyrO+cFrhWJJkLvp61N7sZSsgDKV0liARGh0AOszrrU61h008Fphzi2g+UDT3n1re/D7RBbu0n8C/rFa9l/rX7UVu2iCFzHWZY89Nco0nQaxpy511XYm4SLq8gVb3IK/5UWuesYYvmW2uYh7ltTnXUozfRHM0hwoGh1Ig66kXXYtznvKVKsMoYHQqylhBmDqDI6gg1q3h5rNXTsaUpWUKUpQKUpQKUpQKUpQKpuJXM1+zbGy5rzewNtFPqzlvW3VzXO8LDPcuXG3YKR/EMxHoBkX/uzzmpViww/wAfsv6Fv9VbMVbnUVjhYLN93KD/ACL/AMakuNKyIr/vFPK4kfxJ4lHqQz/y1W4a6r3MQvO3dAPobaAH5oRVndQsgy/FbIZfOOXuJX3rnOBKP2l2G2IVyeWouF7enULccfwgcqEWC4AIxuWYQnRliUbyZNB7iD618NlXYNHdXRpvKsPszpnX7rQRyjerbDICpBGoMUfCz5+tFQzZDEAeF/snY9YP9K5Lt9gibKXCIa08H8NyFI/nFsz5GuxuYd+Wvk39G5fnUPjoF7C3rTCLhttkDbllGYZeuoB096uPFL08cJqTwbBd5iLQtoCwbPtp9H9JrH4YnkSKho4J06T866fs19Hh8Zihoy2zZtnozgE/4mt/M16MrwzjdV0nCcWjqrKZBEg9Z56fpUu8ms9a5Hg9kYe3hgWC/tOdkBJgEP4fQMjIfXqWrqBjMiEtPh3jU6mAB1MmK81mn1PHnM8dsnVUTNcbKANevT2np51zGLxkO4sr3a6NJM5SbgZyFOk+BjExLtMGQJt53uMGPxSe7UahPtXPNgDGbqwA0zE428MFdwyzKKkDkBLR/iHyrWMY82Vxx3EzD8UuoALgW4OqDId4PgckEyDPiEQRE1ZWsWtxZTaYI1Bn7JBEg+R8qpFtMq66hYDncjSEu9YKgBvNGI28X1LjW2zKCSASQOYCkiORMgR6mN6ljeGUyx2qOFY6He4sSlxRcA8IvW7l7IjGNr1t7iMrjUho5a+icOGS8Lh178G0zcy9lnCMQNJa3mJ/AOtcJwHsziLbKGW2+W5Zd1R90slnKjOFkm4Le+kLvXW8Oxdw4RbWIUWsQp8BY+BnRsyEOCVkkAFZBMnSDWrr4fNyll5dfStGFvi4iuNmAaDuJ5EciNq30ZKUpQKUpQKUpQKUpQKo8H4MRdsn647+35qW+kXzK3GJPQXUHKryqzi+BNwI6ELdstntsdBMQyN9x1JU9JB3UVKMeGn6S+Ojp/5Vv/hU9qg2MfZCl2ZLZc+IMyqwYAIVaT8Qyhfavl7jFtWygO52ORGIH8UQfYmgY3GLZRrhBPJVHxOx2RfMxvsBJOgNUvZ6w7OraEIWZ31yl2DZlTrq59AI32nXrtu4wc2bzkDKqm3cVR13UAyd/QVI/ab8QmGKgaAMyKPIaMYH8NZ00sQIYnkf1Ffe+XrVWmGxTav3SH8T3P8ASlZPwu8wj9oCHqloT/8A0Zx+VXVRZh52rTjlTu2NxQUUFjPRRM+W1VX/AMCuje+17/tcw/JGFsfyVz/bfi1+xZNhrWmIRraujgou2dTKqwYoTAAM+xpJyPMcM3hnmf6afrNdx2fsJi8B+yJcVL63GuspG/0jMhjdl7vJqswVE7QeNt2o8+XpFY3LEnMpKtvPmNiDuD5ivRcdxl1mIxPdKuD4nZLWlEW7iTmQDTwMmrACNoYCJDVcthLtxF7t1vW0ZW70MAXQoSCwjLmGdSWWRscomBzvCe0gdf2XiPjtPot0nxIeRZ94HJz4l5ysxd9nOIHA324fiXi2xzYe4YX4ySFJ2hiDv9YMNQRHKz7dfH5Lhdxc4DhxiSR5kaKAJhcx3Ak+pJOkwKzFsRduBIIzACNdkVTHuKueIdpsLafu1cXrw+ojA5fVvhTfYeLyNU5vaNcu5ULMztrCjMxYLLHWAQPPoNqSaa8nlufHwWAyHMNW2IJ0IO6k/wBeRHPUGXgMJaZxk7wkQxRmPhjUSgOWJG+xImTFVD8aw4P7wH0DMPmBFVfHeMiEFhxm+LvFJDprsp3Unn1GlWzaYeS4cPSMLhBb8bt4ug/TzrdZQlmMeBtweftXnnAe3NwXFt4tbbyDF0uLZJUTBkZMxE7ZBp51017jl681tcKLQtsfG3fWmvRHw20kpmmNSWHlzqcQy8lq7wpW3eWzbYQys7W+SD/eL9gFiBl2MkgCDN1XnHaC5atYU3gXBaGt+KXe46+ElnlpgS2uynyrL/Zp2lu33uYfEXDcYKLltmjNAOV1JA1iVInXU1JzNuV4ei0pSgUpSgUpSgUpSgUpSgw7sTMCesa/Os6UoFKUoFKUoFc724wAvYN9NbZF1T0y/ER/AWHvXRVruIGBUiQQQR1B0IpLq7H5+IjQ8tKO4AkkAdSYFdIezhOOOHdiiKHuM3MpbjUE6ZmzoSeWc9K+4Pisvl4ZglBG1x1z3YP1izmLYMaZmPoDpXa5fSaU+G4RiLw+jw911PPIwU+jMAp9jWXaTB3RhrVm+pW7h7gVA2Uk2r1u4VBIJnK2GZR5ED16PHcLvwH4lxEW1MwisWnyCjKpPkEb1NUHEWwyWz3CuwuHKr3QA5yE5roAAygFsiggEHvetYt2qhwyC1BXRgQQRyjUR01qVicY91i1xix5dF8lGwFYW7DXDCKWIBYgCdBuat7OFs4VFbEL3l1xmW3uFH3p09SZ6AGCaCrs4d3+BGb8Kk/mBWF1GQw6sp6MCP1qzxPaW8dEyIvIBZj3bT8qxw3Hyw7vFL3to+QDL5rET+R8+VBp4bdtJnNxVZgua2HE2yV8RVhIMkCBqNyNyKtcA9q4tq6MPatXExdtQyG5qFtvfcQzNGiDXzqs4hwFi6LZPeWr2ltukjZiBoAJMxsDpIip/DbTHDYdVH0jnF3QNpYWhhUknb6RwJ86lFFxXjNzEi13kKttAqIswNACSTuxga+VdP2Fw64ZVx13RWdLVszACu2R7h+7LR/CT0qZw7shh8Kne424jERoxi0v3dYNw+R0P2a57tj2iGKfu7RIsIANiveETDFeSrMKPMk8ou98Q19veBSuL/2c8RuthbKX92Um0x3KqSMjfeAgjqp+6a7SsBSlKBSlKBSlKBSlKBSlKBWLEDUnQa1C4rxFLFvO3PRRMSYJ3OwABJPIA1yHEMc9xwlyWcjMtgSoURIa4AQZiDlJEAyzKGy1ZNjpr3aLDqYDlyN8is4HqyjKPnUf/wCb8Lmy5rk/ds3XHzRCK884h2htIYQi+45jSyn4cuXvD+HKmv19zV3e01xtAixyBgj2QAKv8IFamGx67Z7UYNjAvop6PKH/ABgVV9tOOItnJavAOxMlG8QARj8S/Cc2XmDXlt/jl+4MpfIo/wB3KFj5kHby8vnExN9mKlmnKuUbaCZgR6/lVmElR0PY12OKuvcctGFukyOjWxJYkknxRVhwjGNh+E3bls5bhuBQwiRmNq3m1EEgMYnmKrOzJi3jbnNcJcUfxkR/krZjbmTg9pf97ff5I9z+ttamU5WOeDXLtweItcuELmYljJ5kkyQBr6A10XGOAO2U2dQqhMjGDCiBlJ013IJGpJ1mo3ZXBy/eEbAx/lJ+cj+ButdetWjj8U5wthLS+G7dXPcbZgDoEB5ESR5Q3NqprveXbnN7lwxyljGnkAAPQAdK9ExWHS4uW4oYdCNvMcwfMVGwPDrVv92msyCTmOxGhO2hI/WoOfucPw1hQMQWuXCJypIAHUQRpyknWNq0Y/g6PbFzCywP1JJJ1iVnWQdwf6Vo4/hbi4i47KcrnMrQSpEQBPIiIjy6Ve9n8G1q2S0jO2aD9XQASORMT8qCTwLBtYthGYlic5E6KTHhXy09zJquxvFf2de8torG3lspmEqGuYm9fuSAQdO6tfMVdO8Ca5ngzWGa3+0AvYuXr1xwCYl0RVaQRGWcwgyM0ipYKLiXEruIfvL1wueU6KvkqjRR6e81acC7JX8VlcjurTa942hI6203Y9CYXzO1dxhOxWGwtxi83SpDobkZVDMQsqAFLAqfEZ5EAVfm8vJgT0XxH5LJqZZ64izHbAYUKuW2cmUhrfMWyogEdR1HMMw51f8AD8T3lsMRlOzL0YaETzE7HmIPOqQOx2X+YgfkJPzisVa6j97bJOkNaJlXjYqfqPyDbEaMNivOVqx1FK04a+txFdTKuAynqCJBrdW2ClKUClKUClKUClKUHnnFeK95xRkJ+gwVp7r+bKFdhPqye9s+dcffxTjAvdY/S46+wuNJk27YLNbH3e8aI2gxtpUnAXS9ni2In97lQf8AeXLhb8nT5CoHHBlwvD0H+7uXf/EuT/prc70KOslECa+Ks1ncNdEYch/f971tcys1qJoDvQdJwZ8mBx9w7FbNr+a4wb8nHyrdx22cmCwoENatC4/QPdOdp/DBP8QHOscDhc2Dw9liFGKxLXHnSLVlMtxj0AILe1TGBvX7t0iDdbN+FBC20/FlVZ8x92sb5VN4TYCW9BoYA9F0H55j71nxLiHdd0AoJu3AmpiBIzHzOo+dSLI0A6aVF4rw43jaYOENpswlcwPwnaRzQfM1A43jzZtgqAXdsiTtO5JHP/iRUTifFDbs27qyJdMw0JA8RdPWVK+1TMTw0XDbNxy3dktAAQNIEDQyACoO8+dan4Zba33ZzZRc70a7HMWKyZkElt9fFvQaDxAv3JR1bvLjZxbIYKAjN3ZIJ8QBUnqVJ8qgYtwbjsztC3EQMjE93os22SR8RnxDNv5RV7etAsjEfAxYRpqVKGeujH8q0XMLaNwXDbQuNQ+UZvWYmRQVeLw5z38ozEKApZjKB1IhSZEZhtpvvyrk0z2WNsjaFZdxoNCPODoejGdyK9AxPwn2/UV59jLue47dWMekwPyArUHe9mO0RJS1dcbZbbvqADtbuHfIT8Lbod5XQdrbuTIIIKkqyndSNYPsQQeYIPOvEMM8+HpPyO/rB/zV6F2U49nXu7p+ktrAY/XtLqQx5vbksDuULDeTWM8PmLjXX0r6RXyuLbPC4/uSQ8C0fEGH1CT4845JJzZuWYzAE10Arm2HTQjUf30rlOO8MuWrlvFYZ3UKyrcTN8Ckhc9vcALMlNoGmkqd43fDNj0+lU/Zvi4xVhLmmaIYee2YDoYny1G4NXFVkpSlApSlApSlB4bwb/7Xjvx2v8yVo7Q/ueH/AP6o/wDMalK1OxT26+XKUrqjA18NKVB6T2v/AOkW/wDscR/6uzUTAfW9R/WlK5xVjbraKUqj41aFpSgxuVoubL+Nf60pVGrFbL+L+hrzpdqUqwbsJ8f8Lf6avOzv/S7Hqf8AI9KU+Kj1TD/An4V/yitlKV5nUqFxr9xd/A1KVcey9K7/AGYbf9wv/q8XXoNKV0rmUpSoP//Z")
            );
            
            append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label53")
                .setLeft("41.142857142857146em")
                .setTop("30.476190476190474em")
                .setWidth("6.171428571428572em")
                .setHeight("2.742857142857143em")
                .setCaption("Koharu Rikka")
            );
            
            return children;
            // ]]Code created by CrossUI RAD Studio
        },

        // Give a chance to determine which UI controls will be appended to parent container
        customAppend : function(parent, subId, left, top){
            // "return false" will cause all the internal UI controls will be added to the parent panel
            return false;
        }
        /*,
        // To determine how properties affects this module
        propSetAction : function(prop){
        },
        // To set all node's style in this modlue
        customStyle:{}
    },
    //To customize the default properties and event handlers
    Static:{
        $DataModel:{
        },
        $EventHandlers:{
        }
    */
    }
});