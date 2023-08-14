package com.muratoni.writersblock.service;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;

import com.muratoni.writersblock.entity.ChapterEntity;
import com.muratoni.writersblock.mapper.ChapterMapper;
import com.muratoni.writersblock.model.Chapter;
import com.muratoni.writersblock.repository.ChapterRepository;

@Service
public class ChapterServiceImpl implements ChapterService {
    private ChapterRepository chapterRepository;

    public ChapterServiceImpl(ChapterRepository chapterRepository) {
        this.chapterRepository = chapterRepository;
    }

    @Override
    public Chapter createChapter(Chapter chapter) {
        ChapterEntity chapterEntity = ChapterMapper.toEntity(chapter);

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
    public Chapter updateChapter(Chapter chapter) {
        ChapterEntity chapterEntity = chapterRepository.findById(chapter.getId()).get();
        chapterEntity = ChapterMapper.toEntity(chapter);

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