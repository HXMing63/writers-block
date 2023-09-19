package com.muratoni.writersblock.service;

import java.util.List;

import com.muratoni.writersblock.model.Book;

public interface BookService {

    Book createBook(Book book);

    List<Book> getAllBooks();

    Book updateBook(Book book);

    boolean deleteBook(Long id);
    
}
