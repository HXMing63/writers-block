package com.muratoni.writersblock.service;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;

import com.muratoni.writersblock.entity.BookEntity;
import com.muratoni.writersblock.mapper.BookMapper;
import com.muratoni.writersblock.model.Book;
import com.muratoni.writersblock.repository.BookRepository;

@Service
public class BookServiceImpl implements BookService{
    private BookRepository bookRepository;

    public BookServiceImpl(BookRepository bookRepository){
        this.bookRepository = bookRepository;
    }

    @Override
    public Book createBook(Book book) {
        BookEntity bookEntity = BookMapper.toEntity(book);
        
        BookEntity tRes = bookRepository.save(bookEntity);

        return BookMapper.toDto(tRes);
    }

    @Override
    public List<Book> getAllBooks() {
        List<BookEntity> bookEntities = bookRepository.findAll();
        List<Book> books = bookEntities
            .stream()
            .map((tBook) -> BookMapper.toDto(tBook))
            .collect(Collectors.toList());

        return books;
    }

    @Override
    public Book updateBook(Book book) {
        BookEntity bookEntity = bookRepository.findById(book.getId()).get();
        bookEntity = BookMapper.toEntity(book);

        BookEntity res = bookRepository.save(bookEntity);

        return BookMapper.toDto(res);
    }

    @Override
    public boolean deleteBook(Long id) {
        BookEntity bookEntity = bookRepository.findById(id).get();
        bookRepository.delete(bookEntity);

        return true;
    }
    
}
