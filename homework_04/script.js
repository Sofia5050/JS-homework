class Book
{
    constructor(title, author)
    {
        this.title = title
        this.author = author
    }

    showInfo()
    {
        console.log("Название: " + this.title)
        console.log("Автор: " + this.author)
    }
}

class Library
{
    constructor()
    {
        this.books = []
    }

    addBook(book)
    {
        this.books.push(book)
        alert("Книга добавлена")
    }

    showBooks()
    {
        if(this.books.length == 0)
        {
            alert("Список книг пуст")
        }
        else
        {
            for(let book of this.books)
            {
                book.showInfo()
            }
        }
    }
}

const library = new Library()

while(true)
{
    let choice = prompt(
        "1. Добавить книгу\n" +
        "2. Показать книги\n" +
        "3. Выход"
    )

    if(choice == "1")
    {
        let title = prompt("Введите название книги")
        let author = prompt("Введите автора")

        let book = new Book(title, author)
        library.addBook(book)
    }
    else if(choice == "2")
    {
        library.showBooks()
    }
    else if(choice == "3")
    {
        alert("Пока!")
        break
    }
    else
    {
        alert("Неверный ввод")
    }
}
