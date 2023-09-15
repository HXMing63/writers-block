package com.muratoni.writersblock.mapper;

import java.util.stream.Collectors;

import org.springframework.beans.BeanUtils;

import com.muratoni.writersblock.entity.BookEntity;
import com.muratoni.writersblock.model.Book;

public class BookMapper {
    public static Book toDto(BookEntity bookEntity) {
        if (bookEntity == null) {
            return null;
        }

        Book book = new Book();
        BeanUtils.copyProperties(bookEntity, book);

        book.setCover(MyImageMapper.toDto(bookEntity.getCover()));

        if (bookEntity.getChapterEntities() != null) {
            book.setChapters(bookEntity.getChapterEntities()
                .stream()
                .map(tChapter -> ChapterMapper.toDto(tChapter))
                .collect(Collectors.toList()));
        }

        return book;
    }

    public static BookEntity toEntity(Book book) {
        if (book == null) {
            return null;
        }

        BookEntity bookEntity = new BookEntity();
        BeanUtils.copyProperties(book, bookEntity);

        bookEntity.setCover(MyImageMapper.toEntity(book.getCover()));

        if (book.getChapters() != null){
            bookEntity.setChapterEntities(book.getChapters()
                .stream()
                .map(tChapter -> ChapterMapper.toEntity(tChapter))
                .collect(Collectors.toList()));
        }

        return bookEntity;
    }
}
