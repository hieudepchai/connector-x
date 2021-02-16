initSidebarItems({"enum":[["NpyIterFlag","Flags for constructing an iterator. For the meanings of each flag, readers can refer to the numpy document."]],"struct":[["NpyMultiIter","An iterator over multiple arrays, construced by NpyMultiIterBuilder. You can add `NpyMultiIterBuilder::add_readwrite` for adding a mutable component to the iterator, and `NpyMultiIterBuilder::add_readonly` for adding a immutable one."],["NpyMultiIterBuilder","Builder for NpyMultiIter."],["NpySingleIter","An iterator over a single array, construced by NpySingleIterBuilder. This iterator iterates all elements in the array as `&mut T` (in case `readwrite` is used) or `&T` (in case `readonly` is used)."],["NpySingleIterBuilder","Builder of NpySingleIter."],["RO","Represents the iterator mode where the last array is readonly."],["RW","Represents the iterator mode where the last array is readwrite."]],"trait":[["IterMode","Iterator mode for single iterator"],["MultiIterMode","A combinator type that represents the mode of an iterator (E.g., Readonly, ReadWrite, Readonly + ReadWrite)."],["MultiIterModeWithManyArrays","Represents the iterator mode where at least two arrays are iterated."]],"type":[["ReadWrite","Implies Readwrite iterator."],["Readonly","Implies Readonly iterator."]]});