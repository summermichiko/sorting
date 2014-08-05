describe("bubble Sort", function() {
    it("handles an empty array", function() {
        expect(bubble([])).toEqual([]);
    });

    it("handles an array with a single item", function() {
        expect(bubble([5])).toEqual([5]);
    });

    it("handles an array with multiple items", function() {
        expect(bubble([7,2,4,6,9,1])).toEqual([1,2,4,6,7,9]);
    });
});


describe("merge sort", function() {
    it("handles an empty array", function() {
        expect(mergeSort([])).toEqual([]);
    });

    it("handles an array with a single item", function() {
        expect(mergeSort([5])).toEqual([5]);
    });

    it("handles an empty with multiple items", function() {
        expect(mergeSort([7,4,8,1,3,6])).toEqual([1,3,4,6,7,8]);
    });

    describe("#merge", function() {
    	it("can merge 2 arrays", function() {
    		expect(merge([1,3,5], [2,4])).toEqual([1,2,3,4,5]);
    	})
    });

});