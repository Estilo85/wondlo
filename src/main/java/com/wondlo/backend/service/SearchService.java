package com.wondlo.backend.service;

import com.wondlo.backend.model.Operator;
import com.wondlo.backend.repository.OperatorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import jakarta.persistence.EntityManager;
import jakarta.persistence.Query;
import java.util.List;

@Service
@SuppressWarnings("unchecked")
public class SearchService {

    @Autowired
    private OperatorRepository operatorRepository;

    @Autowired
    private EntityManager entityManager;

    public List<Operator> searchOperators(String query) {
        return operatorRepository.findByNameContainingIgnoreCaseOrWebsiteContainingIgnoreCaseOrSocialHandleContainingIgnoreCase(
            query, query, query
        );
    }

    public List<Operator> semanticSearch(String query, List<Float> queryVector) {
        String sql = """
                SELECT *, 
                1 - (embedding <=> CAST(:queryVector AS vector)) AS similarity
                FROM operators
                WHERE embedding IS NOT NULL
                ORDER BY similarity DESC
                LIMIT 10
                """;

        Query nativeQuery = entityManager.createNativeQuery(sql, Operator.class);
        nativeQuery.setParameter("queryVector", queryVector.toString());
        
        return nativeQuery.getResultList();
    }
}