package com.muratoni.writersblock.service;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;

import com.muratoni.writersblock.entity.BookEntity;
import com.muratoni.writersblock.entity.ChapterEntity;
import com.muratoni.writersblock.mapper.ChapterMapper;
import com.muratoni.writersblock.model.Chapter;
import com.muratoni.writersblock.repository.BookRepository;
import com.muratoni.writersblock.repository.ChapterRepository;

@Service
public class ChapterServiceImpl implements ChapterService {
    private ChapterRepository chapterRepository;
    private BookRepository bookRepository;

    public ChapterServiceImpl(ChapterRepository chapterRepository, BookRepository bookRepository) {
        this.chapterRepository = chapterRepository;
        this.bookRepository = bookRepository;
    }

    @Override
    public Chapter createChapter(Chapter chapter) {
        // BookEntity bookEntity = bookRepository.findById(chapter.getBook().getId()).get();
        ChapterEntity chapterEntity = ChapterMapper.toEntity(chapter);
        // chapterEntity.setBookEntity(bookEntity);

        ChapterEntity tRes = chapterRepository.save(chapterEntity);
        return ChapterMapper.toDto(tRes);
    }

    @Override
    public Chapter createChapter(Chapter chapter, Long id) {
        BookEntity bookEntity = bookRepository.findById(id).get();
        ChapterEntity chapterEntity = ChapterMapper.toEntity(chapter);
        chapterEntity.setBookEntity(bookEntity);

        ChapterEntity tRes = chapterRepository.save(chapterEntity);
        return ChapterMapper.toDto(tRes);
    }

    @Override
    public List<Chapter> getAllChapters() {
        List<ChapterEntity> chapterEntities = chapterRepository.findAll();
        List<Chapter> chapters = chapterEntities
                .stream()
                .map((tChapter) -> ChapterMapper.toDto(tChapter))
                .collect(Collectors.toList());

        return chapters;
    }

    @Override
    public List<Chapter> getAllChaptersByBookId(Long bookId) {
        List<ChapterEntity> chapterEntities = chapterRepository.findByBookId(bookId);
        List<Chapter> chapters = chapterEntities
            .stream()
            .map((tChapter) -> ChapterMapper.toDto(tChapter))
            .collect(Collectors.toList());

        return chapters;
    }

    @Override
    public Chapter updateChapter(Chapter chapter, Long id) {
        BookEntity bookEntity = bookRepository.findById(id).get();
        ChapterEntity chapterEntity = chapterRepository.findById(chapter.getId()).get();
        chapterEntity = ChapterMapper.toEntity(chapter);
        chapterEntity.setBookEntity(bookEntity);

        ChapterEntity res = chapterRepository.save(chapterEntity);
        return ChapterMapper.toDto(res);
    }

    @Override
    public boolean deleteChapter(Long id) {
        ChapterEntity chapterEntity = chapterRepository.findById(id).get();
        chapterRepository.delete(chapterEntity);

        return true;
    }
}